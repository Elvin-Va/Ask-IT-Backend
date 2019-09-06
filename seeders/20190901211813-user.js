import { createSalt, computeHash } from '../auth';

export function up(queryInterface, Sequelize) {
  const salt1 = createSalt();
  const salt2 = createSalt();
  const salt3 = createSalt();
  return queryInterface.bulkInsert('Users', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'demo@demo.com',
    salt: salt1,
    password: computeHash('John', salt1),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'Elvin',
    lastName: 'Valjevcic',
    email: 'elvin@antcolony.io',
    salt: salt2,
    password: computeHash('admin', salt2),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'John',
    lastName: 'Papa',
    email: 'papa@gmail.com',
    salt: salt2,
    password: computeHash('papa', salt3),
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Users', null, {});
}
