const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (post.type === 'POST_NOT_EXIST') {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

module.exports = {
  getAllPosts,
  getPostById,
};