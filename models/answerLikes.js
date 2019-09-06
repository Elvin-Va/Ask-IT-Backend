
export default (sequelize, DataTypes) => {
  const AnswerLikes = sequelize.define('AnswerLikes', {
    isLike: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
  }, {});
  AnswerLikes.associate = (models) => {
    // associations can be defined here
    AnswerLikes.belongsTo(models.Answer, {
      foreignKey: 'answerId',
      onDelete: 'CASCADE',
    });
    AnswerLikes.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return AnswerLikes;
};
