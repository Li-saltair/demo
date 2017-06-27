app.get('/getNews',function(req,res){
  var currentIndex = req.query.page;
  var length = req.query.len;
  var news = [];

  for(var i = 0; i<length; i++){
    news.push('新闻' + (parseInt(currentIndex*length) + i));
  }
  res.send({
    status:1,
    data:news
  });
})
