import * as userService from '../services/userService';
import { createJwt, createSalt, computeHash } from '../auth';

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    // we get the user with the name and save the resolved promis returned
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ msg: 'No such user found', user });
    }
    if (user.password === computeHash(password, user.salt)) {
      // from now on we’ll identify the user by the id and the id is
      // the only personalized value that goes into our token
      const payload = { id: user.id, email: user.email };
      const token = createJwt(payload);
      return res.json({ msg: 'ok', token });
    }
    return res.status(401).json({ msg: 'Password is incorrect' });
  }
};

export const register = async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send({
      success: 'false',
      message: 'some fields are required',
    });
  }
  const salt = createSalt();
  const result = await userService.registerUser({
    firstName, lastName, email, password: computeHash(password, salt), salt,
  });
  return res.status(200).send(result);
};
