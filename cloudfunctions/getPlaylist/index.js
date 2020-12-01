// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const rp = require("request-promise")
let urll = 'http://api.public.ytmedia.com/mobile/jingxuan/story?page='

let data = (function () {
  let task = []
  for (let i = 1; i < 11; i++) {
    task.push(new Promise((resolve, reject) => {
      rp.get(urll + i).then(function (data) {
        resolve(JSON.parse(data).list)
      })
    }))
  }
  return task
})()


function newData(data, wxdata) {
  wxdata = wxdata.data
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
  console.log(data)
  let da = await Promise.all(data).then((d)=>{
    console.log(d)
    return d.reduce(function (a, b) { return a.concat(b)} )
  })
  let d = newData(da, wxdata)
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