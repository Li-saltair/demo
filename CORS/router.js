app.get("/getNews",function(req,res){
  var news = [
    "用1年时间让DRIBBBLE 涨粉过万，我是怎么做到的？",
    "没灵感？这里是最全的12个LOGO设计风格总结！",
    "IOS 10 VS 11：一份全面深入的UI对比分析报告",
    "在配色这件事情上，总会有一些有趣且有用的小技巧",
    "那些让人一见钟情的网页首屏，遵循着怎样的设计模式？",
    "漫山遍野的多边形元素，正在入侵每一份设计稿",
    "配色高手系列！聊聊“黑色”在电商设计里的常用搭配技巧！",
    "设计反复修改？可能是你的信息层级没有梳理好！",
    "如何做落地页设计？这儿有20个顶尖的案例和优点分析",
    "不懂服务设计？看看它的演变历史你就知道了！",
    "深度好文！如何积极正确地使用「预设计」方法？",
    "省时高效！苹果官方的设计流程和实用工具推荐"
  ];
  var data = [];
  for(var i = 0; i<7; i++){
    var index = parseInt(Math.random()*news.length);    //获取随机数来实现随机获取新闻中的某一条
    data.push(news[index]);     //建立新数组用来保存新闻
    news.splice(index,1);     //去重复
  }
  //res.header("Access-Control-Allow-Origin","*")       //CORS的核心思想
  res.header("Access-Control-Allow-Origin","http://a.jrg.com:8080")       //CORS的核心思想
  res.send(data);
})
