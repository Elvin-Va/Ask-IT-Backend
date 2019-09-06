import * as answerService from '../services/answerService';

export const getAnswersByQyestion = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({
      message: 'required fields',
    });
  }
  const result = await answerService.getAnswersByQyestion(id);
  return res.status(200).send(result);
};

export const createAnswer = async (req, res) => {
  const {
    text, questionId, userId,
  } = req.body;
  if (!text || !questionId || !userId) {
    return res.status(400).send({
      message: 'required fields',
    });
  }
  const result = await answerService.createAnswer({ text, questionId, userId });
  return res.status(200).send(result);
};

export const updateAnswer = async (req, res) => {
  const result = await answerService.updateAnswer(req.body);
  res.status(200).send(result);
};
