module.exports.home = function(req,res){
    console.log(req.cookies);

    res.cookie('userId',21);
    return res.render('home',{
        title : 'Home'
    });
};