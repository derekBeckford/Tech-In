const { Comment } = require("../models");

const commentData = [
  {
    user_id: 3,
    post_id: 1,
    comment_text: "Agreed!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Love it",
  },
  {
    user_id: 6,
    post_id: 1,
    comment_text: "Wow",
  },
  {
    user_id: 1,
    post_id: 2,
    comment_text: "Great",
  },
  {
    user_id: 4,
    post_id: 2,
    comment_text: "Totally agree",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "Not sure about this",
  },
  {
    user_id: 7,
    post_id: 3,
    comment_text: "Wonderful",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "Cool",
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: "Nice!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
