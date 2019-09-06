
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Answers', [{
    id: 1,
    text: 'You can take a look on this artickle:',
    questionId: 1,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    like: 4,
    dislike: 2,
  },
  {
    id: 2,
    text: 'You can take a look on this artickle:',
    questionId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    like: 4,
    dislike: 2,
  },
  {
    id: 3,
    text: 'You can take a look on this artickle:',
    questionId: 2,
    userId: 3,
    like: 4,
    dislike: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    text: 'You can take a look on this artickle:',
    questionId: 3,
    userId: 3,
    like: 5,
    dislike: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Answers', null, {}),
};
