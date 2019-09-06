
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Questions', [{
    id: 1,
    text: 'Can anyone tell me something about functional programing?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    like: 0,
    dislike: 0,
  },
  {
    id: 2,
    text: 'Do anyone has expirience with React hooks?',
    createdAt: new Date(),
    updatedAt: new Date(),
    like: 8,
    userId: 2,
    dislike: 0,
  },
  {
    id: 3,
    text: 'How to use env variables in nodejs?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 2,
    like: 0,
    dislike: 0,
  },
  {
    id: 4,
    text: 'I am not so creative with these questions, can someone help me?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 2,
    like: 10,
    dislike: 1,
  },
  {
    id: 5,
    text: 'question6 ?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    like: 0,
    dislike: 20,
  },
  {
    id: 6,
    text: 'question7 ?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    like: 0,
    dislike: 40,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Questions', null, {}),
};
