
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Answers', [{
    text: 'You can take a look on this artickle:',
    questionId: 1,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    text: 'You can take a look on this artickle:',
    questionId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    text: 'You can take a look on this artickle:',
    questionId: 2,
    userId: 3,
    like: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    text: 'You can take a look on this artickle:',
    questionId: 3,
    userId: 3,
    like: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Answers', null, {}),
};
