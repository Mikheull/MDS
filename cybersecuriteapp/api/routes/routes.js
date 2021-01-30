import express from 'express'
import { Router } from 'express';
import passport from 'passport'
import jwt from 'jsonwebtoken'
import passportJWT from 'passport-jwt'

const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const router = Router();
const dotenv = require('dotenv').config()

import Users from './users'
import Products from './products'


// router.use('/v1/users', passport.authenticate('jwt', { session: false }), Users);
// router.use('/v1/products', passport.authenticate('jwt', { session: false }), Products);
router.use('/v1/users', Users);
router.use('/v1/products', Products);


export default router;