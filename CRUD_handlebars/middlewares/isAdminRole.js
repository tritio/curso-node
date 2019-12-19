module.exports = (req, res, next) => {
   if(req.session.currentUser.role === "ADMIN_ROLE") {
    next()
   } else {
    res.status(401).json({message: "No autorizado. No eres Administrador"})    

   }
    
}