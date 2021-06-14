//change array to boolean
module.exports = (req,res,next) =>{
    //console.log(req.session.userId)

    if(req.session.userId == undefined){
        return res.redirect('/')
    }
    next();
}
