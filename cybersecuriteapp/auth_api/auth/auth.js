import passport from 'passport'

const localStrategy = require('passport-local').Strategy;

import UserModel from '../models/users'

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const dotenv = require('dotenv').config()

passport.use(
	new JWTstrategy(
		{
			secretOrKey: 'fHAwxPaZF6wxnZYuxnEF',
			jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
		},
		async (token, done) => {
			try {
				return done(null, token.user);
			} catch (error) {
				done(error);
			}
		}
	)
);


passport.use( 'signup',
    new localStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (email, password, done) => {
			try {
				const user = await UserModel.create({ email, password });
				return done(null, user);
			} catch (error) {
				done(error);
			}
		}
    )
);


passport.use( 'login',
    new localStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (email, password, done) => {
			try {
				const user = await UserModel.findOne({ email });
		
				if (!user) {
					return done(null, false, { message: 'User not found' });
				}
		
				const validate = await user.isValidPassword(password);
		
				if (!validate) {
					return done(null, false, { message: 'Wrong Password' });
				}
		
				return done(null, user, { message: 'Logged in Successfully' });
			} catch (error) {
				return done(error);
			}
		}
    )
);