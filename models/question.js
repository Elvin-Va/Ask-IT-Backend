
export default (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
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
  }, {});
  Question.associate = (models) => {
    // associations can be defined here
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId',
    });
    Question.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Question.hasMany(models.QuestionLikes, {
      foreignKey: 'questionId',
    });
  };
  return Question;
};
