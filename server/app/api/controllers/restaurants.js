const restaurantModel = require('../models/restaurants');

module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  restaurantModel.findById(req.params.restaurantId, function(err, restaurantInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Restaurant found!!!", data:{restaurant: restaurantInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let restaurantList = [];
  restaurantModel.find({}, function(err, restaurants){
   if (err){
    next(err);
   } else{
    for (let restaurant of restaurants) {
        restaurantList.push({id: restaurant._id, name: restaurant.name, aboutUs: restaurant.aboutUs, menu: restaurant.menu });
    }
    res.json({status:"success", message: "Restaurant list found!!!", data:{restaurants: restaurantList}});
       
   }
});
 },
updateById: function(req, res, next) {
    restaurantModel.findByIdAndUpdate(req.params.restaurantId,{name:req.body.name}, function(err, restaurantInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Restaurant updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
    restaurantModel.findByIdAndRemove(req.params.restaurantId, function(err, restaurantInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Restaurant deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
    restaurantModel.create({ name: req.body.name, aboutUs: req.body.aboutUs, menu: req.body.menu }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Restaurant added successfully!!!", data: {restaurant: result}});
      
    });
 },
}