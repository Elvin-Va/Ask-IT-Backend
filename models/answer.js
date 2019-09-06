
export default (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    dislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  Answer.associate = (models) => {
    // associations can be defined here
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId',
      onDelete: 'CASCADE', // delete answer on question delete
    });
    Answer.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Answer.hasMany(models.AnswerLikes, {
      foreignKey: 'answerId',
    });
  };
  return Answer;
};
