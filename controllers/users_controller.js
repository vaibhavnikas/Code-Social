const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.end('<h1>User Profile Loaded</h1>');
}

// render the signup page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Code Social | Sign Up"
    });
}

// render the signin page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Code Social | Sign In"
    });
};

// get the signup data
module.exports.create = function(req,res){
    
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function(err,user){
        if(err){ console.log('error in finding the user in signing up'); return;}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating user in signing up'); return;}

                return res.redirect('/users/sign-in');
            })
        }else{
            res.redirect('back');
        }
    });
};

// signin and create a session for the user
module.exports.createSession = function(req,res){
    // To Do
};
