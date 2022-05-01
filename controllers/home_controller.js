const Posts = require('../models/post');

module.exports.home = function(req,res){
    // console.log(req.cookies);

    // res.cookie('userId',21);

    // Posts.find({}, function(err, posts){


    //     return res.render('home', {
    //         title: 'Code Social | Home',
    //         posts: posts
    //     });
    // });


    Posts.find({}).populate('User')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function (err, posts) {


        return res.render('home', {
            title: 'Code Social | Home',
            posts: posts
        });
    });

    
};