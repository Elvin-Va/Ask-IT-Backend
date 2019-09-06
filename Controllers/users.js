import * as userService from '../services/userService';
import { computeHash } from '../auth';

export const getUsersWithMostAnswers = async (req, res) => {
  const result = await userService.getUsersWithMostAnswers();
  res.status(200).send(result);
};

export const getUser = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.status(400).send({
      message: 'required fields',
    });
  }
  const result = await userService.getUserById(id);
  res.status(200).send(result);
};

export const changePassword = async (req, res) => {
  const {
    id, currentPass, newPass,
  } = req.body;
  if (!id || !currentPass || !newPass) {
    return res.status(400).send({
      success: 'false',
      message: 'some fields are required',
    });
  }

  const result = await userService.getUserById(id);
  if (computeHash(currentPass, result.salt) !== result.password) {
    return res.status(401).json({ msg: 'Password is incorrect' });
  }

  await userService.updateUser(id, computeHash(newPass, result.salt));

  return res.json({ msg: 'success' });
};
