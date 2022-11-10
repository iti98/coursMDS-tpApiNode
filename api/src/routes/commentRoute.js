module.exports = (server) => {
    const commentController = require("../controllers/commentController");

    server.route("/posts/:post_id/comments")
        .get(commentController.listAllCommentsFromPost)
        .post(commentController.createComment);

    server.route("/comments/:comment_id") // req.params.comment_id
        .get(commentController.getCommentById)
        .put(commentController.updateCommentById)
        .delete(commentController.deleteCommentById);
}