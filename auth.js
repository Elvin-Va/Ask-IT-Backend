import passport from 'passport';
import passportJWT from 'passport-jwt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import { getUserById } from './services/userService';

const dotenv = require('dotenv');

dotenv.config();

// ExtractJwt to help extract the token
const { ExtractJwt } = passportJWT;
// JwtStrategy which is the strategy for the authentication
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

// lets create our strategy for web token
const strategy = new JwtStrategy(jwtOptions, ((jwtPayload, next) => {
  console.log('payload received', jwtPayload);
  const user = getUserById(jwtPayload.id);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
}));
// use the strategy
passport.use(strategy);

export default passport;

export const createJwt = (payload) => jwt.sign(payload, jwtOptions.secretOrKey);

export const createSalt = () => {
  const len = 8;
  return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').substring(0, len);
};

export const computeHash = (source, salt) => {
  const hmac = crypto.createHmac('sha1', salt);
  const hash = hmac.update(source);
  return hash.digest('hex');
};
