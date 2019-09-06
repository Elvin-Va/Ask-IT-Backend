import models from '../models';

export const getLatestQuestions = async (page) => {
  try {
    return await models.Question.findAll({
      include: [
        {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
      offset: page * 20,
      limit: 20,
      order: [['createdAt', 'DESC']],
    });
  } catch (err) {
    return err;
  }
};

export const getHotQuestions = async (page) => {
  try {
    return await models.Question.findAll({
      include: [
        {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
      offset: page * 20,
      limit: 20,
      order: [['like', 'DESC']],
    });
  } catch (err) {
    return err;
  }
};

export const getLatestQuestionsByUser = async (userId, page) => {
  try {
    return await models.Question.findAll({
      include: [
        {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
      where: {
        userId,
      },
      offset: page * 20,
      limit: 20,
      order: [['createdAt', 'DESC']],
    });
  } catch (err) {
    return err;
  }
};

export const updateQuestion = async ({ id, isLike }) => {
  try {
    const question = await models.Question.findByPk(id);
    const newQuestion = isLike
      ? await question.update({ like: question.like + 1 })
      : await question.update({ dislike: question.dislike + 1 });

    return newQuestion;
  } catch (err) {
    return err;
  }
};

export const createQuestion = async (answer) => {
  try {
    return await models.Question.create(answer);
  } catch (err) {
    return err;
  }
};
