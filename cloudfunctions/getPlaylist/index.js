// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const rp = require("request-promise")
let urll = 'http://api.public.ytmedia.com/mobile/jingxuan/top'
// let data  = new Promise(function(res, reject) {
//   rp.get(urll).then(function(data){
//     res(data)
//   })
// });


let data = function () {
  return new Promise((resolve, reject) => {
    rp.get(urll).then(function (data) {
      resolve(JSON.parse(data).list.banner)
    })
  })
}


function newData(data, wxdata) {
  wxdata = wxdata.data
  debugger
  let arr = []
  for (let i = 0; i < data.length; i++) {
    let flag = true
    for (let j = 0; j < wxdata.length; j++) {
      if (data[i].id === wxdata[j].id) {
        flag = false
        break
      }
    }
    if (flag) {
      arr.push(data[i])
    }
  }
  return arr

}



exports.main = async (event, context) => {
  const wxdata = await db.collection('playlist').get()
  let da = await data();
  let d = newData(da, wxdata)
  console.log(d)
  for (let i = 0; i < d.length; i++) {
    db.collection('playlist').add({
      data: {
        ...d[i],
        createTime: db.serverDate()
      }
    })
  }
  return {
    code: 200
  }
}