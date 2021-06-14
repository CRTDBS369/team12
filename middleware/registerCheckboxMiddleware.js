//change array to boolean
module.exports = (req,res,next) =>{
    if(req.body.isProfessor != 0){
        req.body.isProfessor = true;
    }
    next();
}
