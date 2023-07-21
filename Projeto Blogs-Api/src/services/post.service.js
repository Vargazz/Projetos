const { User, Category, BlogPost } = require('../models');

const getAllPosts = async () => {
    const posts = await BlogPost.findAll({
      include: [
        {
          model: User,
          required: true,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
    ],
    order: [['id', 'ASC']],
  
    });
    return posts;
  };

  const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
      include: [
        {
          model: User,
          required: true,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    if (!post) return { type: 'POST_NOT_EXIST' };
  
    return post;
  };

module.exports = {
    getAllPosts,
    getPostById,
};