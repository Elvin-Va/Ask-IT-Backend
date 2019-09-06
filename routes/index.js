import express from 'express';
import passport from '../auth';

import * as usersController from '../Controllers/users';
import * as questionsController from '../Controllers/questions';
import * as answersController from '../Controllers/answers';
import * as authController from '../Controllers/auth';

const router = express.Router();

router.post('/api/v1/login', authController.login);
router.post('/api/v1/register', authController.register);
router.get('/api/v1/latestQuestions', questionsController.getLatestQuestions);
router.get('/api/v1/hotQuestions', questionsController.getHotQuestions);
router.put('/api/v1/updateQuestion', questionsController.updateQuestion);
router.get('/api/v1/usersWithMostAnswers', usersController.getUsersWithMostAnswers);
router.get('/api/v1/answers/:id', answersController.getAnswersByQyestion);
router.put('/api/v1/updateAnswer', answersController.updateAnswer);

// protected routes
router.post('/api/v1/question', passport.authenticate('jwt', { session: false }), questionsController.createQuestion);
router.post('/api/v1/answer', passport.authenticate('jwt', { session: false }), answersController.createAnswer);
router.get('/api/v1/myQuestions', passport.authenticate('jwt', { session: false }), questionsController.getMyQuestions);
router.get('/api/v1/user', passport.authenticate('jwt', { session: false }), usersController.getUser);
router.post('/api/v1/changePass', passport.authenticate('jwt', { session: false }), usersController.changePassword);


export default router;
