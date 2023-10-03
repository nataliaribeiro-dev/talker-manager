module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'user_id',
    },
    published: {
      type: DataTypes.DATE,
      field: 'published',
      defaultValue: DataTypes.NOW,
    },
    updated: {
      type: DataTypes.DATE,
      field: 'updated',
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return BlogPost;
}