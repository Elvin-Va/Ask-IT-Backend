
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Questions', [{
    text: 'Can anyone tell me something about functional programing?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
  },
  {
    text: 'Do anyone has expirience with React hooks?',
    createdAt: new Date(),
    updatedAt: new Date(),
    like: 8,
    userId: 2,
  },
  {
    text: 'How to use env variables in nodejs?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 2,
  },
  {
    text: 'I am not so creative with these questions, can someone help me?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 2,
    like: 10,
    dislike: 1,
  },
  {
    text: 'question6 ?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    dislike: 20,
  },
  {
    text: 'question7 ?',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 1,
    dislike: 40,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Questions', null, {}),
};
