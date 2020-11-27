// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const rp =req("request-promise")
let url = 'http://api.public.ytmedia.com/mobile/jingxuan/top'
let data = rp.get(url).then(function(res){
  console.log(res)
})

const wxdata = db.collection('playlist').get()

let newData = []
for(let i=0;i<data.length;i++){
  let flag = true
  for(let j=0;j<list.length;j++){
    if(data[i].id === list.data[j].id){
      flag = false
      break
    }
  }
  if(flag){
    newData.push(val[i])
  }
}
console.log(newData)
exports.main = async (event, context) => {

  //for(let i=0;i<newData.length;i++){
     db.collection('playlist').add({
      data:{
        ...newData[0],
        createTime:db.serverDate()
      }
    })
 // }
  return {
    code:200
  }
}