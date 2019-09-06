import models from '../models';

export const getUsersWithMostAnswers = async () => {
  try {
    // used raw query, it is more performant
    const resp = await models.sequelize.query(`SELECT "answ"."userId", "users"."firstName", "users"."lastName", "users"."email", "users"."createdAt",COUNT("answ"."id") AS "numOfAnswers"
    FROM public."Answers" as "answ"
    JOIN public."Users" as "users" ON "answ"."userId"="users"."id"
    GROUP BY "userId", "firstName", "lastName", "email", "users"."createdAt"
    ORDER BY "numOfAnswers" DESC`);
    return resp[0];
  } catch (err) {
    return err;
  }
};

export const getUserById = async (userId) => {
  try {
    return await models.User.findByPk(userId);
  } catch (err) {
    return err;
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await models.User.findOne({ where: { email } });
  } catch (err) {
    return err;
  }
};

export const registerUser = async (user) => {
  try {
    return await models.User.create(user);
  } catch (err) {
    return err;
  }
};

export const updateUser = async (id, password) => {
  try {
    return await models.User.update({ password }, { where: { id } });
  } catch (err) {
    return err;
  }
};
