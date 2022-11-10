const Post = require('../models/postModel');
const textApiProvider = require("../providers/randomApiProvider");

listAllPosts = (req, res) => {
    Post.find({}, (error, posts) => {
        if (error) {
            console.log(error);
            res.status(500)
                .json({ message: "Erreur serveur." });
        }
        else {
            res.status(200)
                .json(posts);
        }
    })
}

createPost = (req, res) => {
    let newPost = new Post(req.body);

    let randomTextPromise = textApiProvider.getRandomText();

    randomTextPromise.then((response) => {
        if (!newPost.content) {
            newPost.content = response;
        }
        newPost.save((error, post) => {
            if (error) {
                console.log(error);
                res.status(401)
                    .json({ message: "Reqûete invalide." });
            }
            else {
                res.status(201)
                    .json(post);
            }
        });
    });

}

getPostById = (req, res) => {
    Post.findById(req.params.post_id, (error, post) => {
        if (error) {
            console.log(error);
            res.status(401)
                .json({ message: "Reqûete invalide." });
        }
        else {
            res.status(200)
                .json(post);
        }
    });
}

updatePostById = (req, res) => {
    Post.findByIdAndUpdate(req.params.post_id, req.body, { new: true }, (error, post) => {
        if (error) {
            console.log(error);
            res.status(401)
                .json({ message: "Reqûete invalide." });
        }
        else {
            res.status(200)
                .json(post);
        }
    });
}

deletePostById = (req, res) => {
    Post.findByIdAndRemove(req.params.post_id, (error) => {
        if (error) {
            console.log(error);
            res.status(401)
                .json({ message: "Reqûete invalide." });
        }
        else {
            res.status(200)
                .json({ message: "Article supprimé" });
        }

    })
}


module.exports = { listAllPosts, createPost, getPostById, updatePostById, deletePostById }