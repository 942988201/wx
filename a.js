var a = {
  text: "测试数据",
  url: 'http://image.ytmedia.com/2048/2048/68d0c7a8427398b4489cfd06e7d6a90e.jpg@!index-banner'
}
var b= []
for(let i=0;i<50;i++){
  b.push({
    
      text: "测试数据"+i,
      url: 'http://image.ytmedia.com/2048/2048/68d0c7a8427398b4489cfd06e7d6a90e.jpg@!index-banner'

  })
}
b= JSON.stringify(b)

b = b.slice(1,b.length-1)
b = b.replace(/},/g, "}")

var fs = require("fs")
fs.writeFile("1.json",b,function(){

})