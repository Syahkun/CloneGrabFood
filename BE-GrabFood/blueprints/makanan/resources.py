from flask import Blueprint
from flask_restful import Api, Resource, marshal, reqparse, inputs
from .model import Makanan
from blueprints import db, app
from sqlalchemy import desc

from flask_jwt_extended import create_access_token, get_jwt_identity, get_jwt_claims, jwt_required

bp_makanan = Blueprint('table_makanan', __name__)
api = Api(bp_makanan)


class MakananResource(Resource):
    def get(self, id):
        qry = Makanan.query.get(id)
        if qry is not None:
            return marshal(qry, Makanan.response_fields), 200
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
        parser.add_argument('warung', location='json')
        parser.add_argument('lokasi', location='json')
        parser.add_argument('kota', location='json')
        parser.add_argument('menu', location='json')
        args = parser.parse_args()

        result = Makanan(args['nama'], args['gambar'], args['gambar1'],
                         args['gambar2'], args['harga'], args['promo'], args['diskon'], args['warung'], args['lokasi'], args['kota'], args['menu'])

        db.session.add(result)
        db.session.commit()
        app.logger.debug('DEBUG: %s', result)

        return marshal(result, Makanan.response_fields), 200, {'Content-Type': 'application/json'}

    def delete(self, id):
        qry = Makanan.query.get(id)
        if qry is None:
            return {'status': 'NOT_FOUND'}, 404
        db.session.delete(qry)
        db.session.commit()
        return {'status': 'DELETED'}, 200


class DaftarMakanan(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('p', type=int, location='args', default=1)
        parser.add_argument('rp', type=int, location='args', default=25)

        args = parser.parse_args()
        offset = (args['p']*args['rp']-args['rp'])
        qry = Makanan.query

        rows = []
        for row in qry.limit(args['rp']).offset(offset).all():
            rows.append(marshal(row, Makanan.response_fields))

        return rows, 200


api.add_resource(DaftarMakanan, '', '/daftar')
api.add_resource(MakananResource, '', '/<id>')

# test
