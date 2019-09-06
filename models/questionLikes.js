
export default (sequelize, DataTypes) => {
  const QuestionLikes = sequelize.define('QuestionLikes', {
    isLike: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
  }, {});
  QuestionLikes.associate = (models) => {
    // associations can be defined here
    QuestionLikes.belongsTo(models.Question, {
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
    });
    QuestionLikes.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return QuestionLikes;
};
