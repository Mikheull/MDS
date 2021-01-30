import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import Users from './models/users';
const dotenv = require('dotenv').config()

export default function configPassport() {

	passport.use(
		new JwtStrategy({
			jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token'),
			secretOrKey: 'fHAwxPaZF6wxnZYuxnEF',
		},

		async (jwtPayload, done) => {
			try {
				const user = await Users.findById(jwtPayload._id);
				if (!user)
				return done(user);

				return done(null, user);
			} catch (err) {
				return done(err);
			}
		}),
	);
}