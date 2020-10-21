// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post',
      {
          title: { type: DataTypes.STRING },
          category: { type: DataTypes.STRING },
          image: { type: DataTypes.STRING },
          isOrganic: { type: DataTypes.STRING },
          price: { type: DataTypes.STRING },
          unit: { type: DataTypes.STRING },
          description: { type: DataTypes.TEXT },
          UserId: { type: DataTypes.INTEGER},
          author: { type: DataTypes.STRING },
          userImg: { type: DataTypes.STRING},
          userCity: { type: DataTypes.STRING},
          userEmail: { type: DataTypes.STRING }

      },
      
      {freezeTableName: true}
  );

  // Post.associate = (models) => {
  //   Post.belongsTo(models.User, {
  //     as: 'user',
  //     foreignKey: 'userId', 
  //     allowNull: false
      
  //   });
  // };
  

  return Post;
}