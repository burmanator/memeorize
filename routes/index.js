//get data
var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {"pictures": data.memes});
};

exports.search = function(req, res){
  console.log("reached");
  //var str = req.query.search;
  console.log("Before: " + req.query.search)
  //str = str.replace(/\s/g,'')
  var filter = "#" + req.query.search.replace(/\s/g,'').toLowerCase();
  console.log("After: " + filter);
  var parsed = data.memes.filter(function (entry) {
    console.log(entry);
    return entry.caption == filter;
  });
  if(filter == "#")
  {
    parsed = data.memes;
  }
  res.render('index', {"pictures": parsed});
}
