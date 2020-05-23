from blueprints import db
from flask_restful import fields
from sqlalchemy.sql import func
from sqlalchemy.sql.expression import text
from datetime import datetime
# from blueprints.pengguna.model import Pengguna
from sqlalchemy import Integer, String, ForeignKey, Column
from sqlalchemy.orm import relationship


class Makanan(db.Model):
    __tablename__ = 'table_makanan'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nama = db.Column(db.String(255), nullable=False)
    gambar = db.Column(db.String(255))
    gambar1 = db.Column(db.String(255))
    gambar2 = db.Column(db.String(255))
    harga = db.Column(db.Integer)
    promo = db.Column(db.Boolean, default=False)
    diskon = db.Column(db.Integer, default=0)
    warung = db.Column(db.String(255))
    lokasi = db.Column(db.String(255))
    kota = db.Column(db.String(255))
    menu = db.Column(
        db.String(100), db.ForeignKey('table_menu.nama_menu'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    response_fields = {
        'id': fields.Integer,
        'nama': fields.String,
        'gambar': fields.String,
        'gambar1': fields.String,
        'gambar2': fields.String,
        "harga": fields.Integer,
        'promo': fields.Boolean,
        'diskon': fields.Integer,
        'warung': fields.String,
        'lokasi': fields.String,
        'kota': fields.String,
        'menu': fields.String,
        'created_at': fields.DateTime,
        'updated_at': fields.DateTime
    }

    def __init__(self, nama, gambar, gambar1, gambar2, harga, promo, diskon, warung, lokasi, kota, menu):
        self.nama = nama
        self.gambar = gambar
        self.gambar1 = gambar1
        self.gambar2 = gambar2
        self.harga = harga
        self.promo = promo
        self.diskon = diskon
        self.warung = warung
        self.lokasi = lokasi
        self.kota = kota
        self.menu = menu

    def __repr__(self):
        return '<Makanan %r>' % self.id
