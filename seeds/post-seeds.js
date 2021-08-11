const { Post } = require("../models");

const postData = [
  {
    title: "Lorem ipsum dolor sit amet",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet.",
    user_id: 5,
  },
  {
    title: "sem viverra aliquet eget sit",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus metus.",
    user_id: 2,
  },
  {
    title: "tortor posuere ac ut consequat",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
