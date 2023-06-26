export const uploadFile = (req, res) => {
  if(req.files){
    const {picture} = req.files;
    picture.mv(`./public/uploads/${Date.now()}-${picture.name}`);
    res.json({path: `/uploads/${Date.now()}-${picture.name}`});
  }
}