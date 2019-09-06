import models from '../models';

export const getAnswersByQyestion = async (questionId) => {
  try {
    return await models.Answer.findAll({
      include: [
        {
          model: models.User,
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
      where: {
        questionId,
      },
      order: ['createdAt'],
    });
  } catch (err) {
    return err;
  }
};

export const createAnswer = async (answer) => {
  try {
    return await models.Answer.create(answer);
  } catch (err) {
    return err;
  }
};

export const updateAnswer = async ({ id, isLike }) => {
  try {
    const answer = await models.Answer.findByPk(id);
    const newAnswer = isLike
      ? await answer.update({ like: answer.like + 1 })
      : await answer.update({ dislike: answer.dislike + 1 });

    return newAnswer;
  } catch (err) {
    return err;
  }
};
