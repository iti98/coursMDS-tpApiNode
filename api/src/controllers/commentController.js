const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

listAllCommentsFromPost = (req, res) => {
    Comment.find({ post_id: req.params.post_id }, (error, comments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comments);
        }
    })
}

createComment = (req, res) => {

    Post.findById(req.params.post_id, (error, post) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {

            let newComment = new Comment({ ...req.body, post_id: req.params.post_id });

            newComment.save((error, comment) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(comment);
                }
            })

        }

    })

}

getCommentById = (req, res) => {
    Comment.findById(req.params.comment_id, (error, comment) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(200);
            res.json(comment);
        }

    })
}

updateCommentById = (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true }, (error, comment) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(200);
            res.json(comment);
        }

    })
}

deleteCommentById = (req, res) => {
    Comment.findByIdAndRemove(req.params.comment_id, (error) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(200);
            res.json({ message: "Commentaire supprimé" });
        }

    })
}

module.exports = { listAllCommentsFromPost, createComment, getCommentById, updateCommentById, deleteCommentById }