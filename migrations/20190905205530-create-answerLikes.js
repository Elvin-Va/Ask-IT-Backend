
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('AnswerLikes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    isLike: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    // questionId: {
    //   type: Sequelize.INTEGER,
    //   onDelete: 'CASCADE',
    //   references: {
    //     model: 'Questions',
    //     key: 'id',
    //     as: 'questionId',
    //   },
    // },
    answerId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Answers',
        key: 'id',
        as: 'answerId',
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    },
  });
}
export function down(queryInterface) { return queryInterface.dropTable('AnswerLikes'); }
