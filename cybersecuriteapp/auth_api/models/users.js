import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: {
		type: String,
		trim: true,
		unique: true
	},
    email: {
		type: String,
		unique: true,
		required: true
	},
    password: { 
		type: String,
		required: true, 
		default: 'JohnDoe'
	}
});

UserSchema.pre('save',
	async function(next) {
		const user = this;
		const hash = await bcrypt.hash(this.password, 10);

		this.password = hash;
		next();
	}
);

UserSchema.methods.isValidPassword = async function(password) {
	const user = this;
	const compare = await bcrypt.compare(password, user.password);

	return compare;
}

export default model('users', UserSchema);