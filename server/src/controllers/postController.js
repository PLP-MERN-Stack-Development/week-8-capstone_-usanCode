

const Post = require("../models/Post");

const createPost = async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const newPost = await Post.create({
      title,
      content,
      image,
      author: req.user.id,
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPost, getPosts };
