
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Question, {
      foreignKey: 'userId',
    });
    User.hasMany(models.Answer, {
      foreignKey: 'userId',
    });
  };
  return User;
};
