function usersList(req,resp){       
    resp.send({ products: [] });        
 }

 function user(req,resp){
    var userId = req.params.id;
    resp.send({ id: userId });
 }
 
 exports.usersList = usersList;
 exports.user = user;