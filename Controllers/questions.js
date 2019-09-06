import * as questionService from '../services/questionService';

export const getLatestQuestions = async (req, res) => {
  const { page } = req.query;
  const result = await questionService.getLatestQuestions(page || 0);
  res.status(200).send(result);
};

export const getHotQuestions = async (req, res) => {
  const { page } = req.query;
  const result = await questionService.getHotQuestions(page || 0);
  res.status(200).send(result);
};

export const getMyQuestions = async (req, res) => {
  const { page, userId } = req.query;
  if (!userId) {
    res.status(400).send({
      message: 'required fields',
    });
  }
  const result = await questionService.getLatestQuestionsByUser(userId, page || 0);
  res.status(200).send(result);
};

export const updateQuestion = async (req, res) => {
  const result = await questionService.updateQuestion(req.body);
  res.status(200).send(result);
};

export const createQuestion = async (req, res) => {
  const {
    text, userId,
  } = req.body;
  if (!text || !userId) {
    return res.status(400).send({
      message: 'required fields',
    });
  }
  const result = await questionService.createQuestion({ text, userId });
  return res.status(200).send(result);
};
