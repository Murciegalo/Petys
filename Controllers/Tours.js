// PARAM MIDDLEWARE
exports.checkID = (req, res, next, val) => {
  console.log(`Tour Id: ${val}`);
  // if(req.params.id * 1 > tours.length){
  //   return res.status(404).json({
  //     status: 'failed',
  //     msg: 'Invalid ID'
  //   })
  // }
  next()
}

exports.getAllTours = (req, res, next) => {
  return res.status(200).json({ 
    msg: 'all ok' 
  })
}

exports.getTour = (req, res, next) => {
  return res.status(200).json({ 
    msg: 'all ok' 
  })
}
