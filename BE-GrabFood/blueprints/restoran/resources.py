from flask import Blueprint
from flask_restful import Api, Resource, marshal, reqparse, inputs
from .model import Restoran
from blueprints.lokasi.model import Lokasi
from blueprints.menu.model import Menu
from blueprints import db, app
from sqlalchemy import desc

from flask_jwt_extended import create_access_token, get_jwt_identity, get_jwt_claims, jwt_required

bp_Restoran = Blueprint('table_Restoran', __name__)
api = Api(bp_Restoran)


class RestoranResource(Resource):
    def get(self, id):
        qry = Restoran.query.get(id)
        if qry is not None:
            return marshal(qry, Restoran.response_fields), 200
        return {'status': 'NOT_FOUND'}, 404

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nama', location='json', required=True)
        parser.add_argument('gambar', location='json')
        parser.add_argument('gambar1', location='json')
        parser.add_argument('gambar2', location='json')
        parser.add_argument('harga', location='json')
        parser.add_argument('promo', location='json', type=bool)
        parser.add_argument('diskon', location='json', type=int)
        parser.add_argument('kota', location='json')
        parser.add_argument('menu_id', location='json')
        parser.add_argument('lokasi_id', location='json')
        args = parser.parse_args()

        result = Restoran(args['nama'], args['gambar'], args['gambar1'],
                          args['gambar2'], args['harga'], args['promo'], args['diskon'], args['menu_id'], args['lokasi_id'])

        db.session.add(result)
        db.session.commit()
        app.logger.debug('DEBUG: %s', result)

        return marshal(result, Restoran.response_fields), 200, {'Content-Type': 'application/json'}

    def delete(self, id):
        qry = Restoran.query.get(id)
        if qry is None:
            return {'status': 'NOT_FOUND'}, 404
        db.session.delete(qry)
        db.session.commit()
        return {'status': 'DELETED'}, 200

 
        # parser = reqparse.RequestParser()
        # parser.add_argument('p', type=int, location='args', default=1)
        # parser.add_argument('rp', type=int, location='args', default=25)

        # args = parser.parse_args()
        # offset = (args['p']*args['rp']-args['rp'])
        # qry = Lokasi.query

        # rows = []
        # for row in qry.limit(args['rp']).offset(offset).all():
        #     lokasi_list = marshal(row, Lokasi.response_fields)
        #     respon_restoran = Restoran.query.filter_by(
        #         id=lokasi_list['restoran_id']).first()
        #     # respon_restoran_menu =Menu.query.filter_by(id=respon_restoran.menu_id).first()
        #     result_respon_restoran = marshal(
        #         respon_restoran, Restoran.response_fields)
        #     lokasi_list['restoran'] = result_respon_restoran
            
        #     lokasi_menu = Menu.query.filter_by(id= lokasi_list['restoran']['menu_id']).first()
        #     result_lokasi_menu = marshal(lokasi_menu, Menu.response_fields)
        #     lokasi_list['restoran']['menu'] = result_lokasi_menu
            
        #     # respon_restoran_menu =Menu.query.filter_by(id=lokasi_list['menu_id']).first()
            
        #     rows.append(lokasi_list)

        # return rows, 200


class DaftarRestoran(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('p', type=int, location='args', default=1)
        parser.add_argument('rp', type=int, location='args', default=25)

        args = parser.parse_args()
        offset = (args['p']*args['rp']-args['rp'])
        qry = Restoran.query

        rows = []
        for row in qry.limit(args['rp']).offset(offset).all():
            restoran_list=(marshal(row, Restoran.response_fields))
            respon_lokasi = Lokasi.query.filter_by(id=restoran_list['lokasi_id']).first()
            result_respon_lokasi = marshal(respon_lokasi, Lokasi.response_fields)
            restoran_list['lokasi'] = result_respon_lokasi
            
            restoran_menu = Menu.query.filter_by(id=restoran_list['menu_id']).first()
            result_respon_menu = marshal(restoran_menu, Menu.response_fields)
            restoran_list['menu'] = result_respon_menu
            
            rows.append(restoran_list)       

        return rows, 200


api.add_resource(DaftarRestoran, '', '/daftar')
api.add_resource(RestoranResource, '', '/<id>')

# test
