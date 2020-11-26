// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// const rp = require('request-promise')
// const url = 'https://y.music.163.com/m/'
const db = cloud.database()
let val = {
  "Home": {
    "hasTaste": false,
    "code": 200,
    "category": 0,
    "result": [{
      "_id": 5351084973,
      "type": 0,
      "name": "马拉多纳 再见球王",
      "copywriter": "编辑推荐：他离开了我们，但他也与我们同在",
      "picUrl": "http:\u002F\u002Fp1.music.126.net\u002FPPWtm5qGRS4XN0cbIsF31Q==\u002F109951165497332758.jpg",
      "canDislike": false,
      "trackNumberUpdateTime": 1606336146091,
      "playCount": 750589,
      "trackCount": 26,
      "highQuality": false,
      "alg": "featured"
    }, {
      "_id": 5334020451,
      "type": 0,
      "name": "rapper说情话┃旋律说唱┃甜甜的宝藏女孩必备",
      "copywriter": "热门推荐",
      "picUrl": "http:\u002F\u002Fp1.music.126.net\u002FsdJUyIN_NfnoBfRvElWZAA==\u002F109951165496147168.jpg",
      "canDislike": true,
      "trackNumberUpdateTime": 1606120625197,
      "playCount": 755482,
      "trackCount": 51,
      "highQuality": false,
      "alg": "cityLevel_unknow"
    }, {
      "id": 4982074494,
      "type": 0,
      "name": "“所以你长篇大论换来了什么.”",
      "copywriter": "热门推荐",
      "picUrl": "http:\u002F\u002Fp1.music.126.net\u002Fhh7G2R1G51aG_0q3c7lLwQ==\u002F109951165412937994.jpg",
      "canDislike": true,
      "trackNumberUpdateTime": 1604978202643,
      "playCount": 1013294,
      "trackCount": 93,
      "highQuality": false,
      "alg": "cityLevel_unknow"
    }, {
      "id": 2829733864,
      "type": 0,
      "name": "[睡眠伴侣] 送你一颗失眠特效药 ",
      "copywriter": "热门推荐",
      "picUrl": "http:\u002F\u002Fp1.music.126.net\u002Fq1_CFwD4QF6LmKqXlE-cEA==\u002F109951165420373681.jpg",
      "canDislike": true,
      "trackNumberUpdateTime": 1606341600000,
      "playCount": 64934068,
      "trackCount": 40,
      "highQuality": false,
      "alg": "cityLevel_unknow"
    }, {
      "id": 2434408895,
      "type": 0,
      "name": "所以你并没有坚定地选择过我",
      "copywriter": "热门推荐",
      "picUrl": "http:\u002F\u002Fp1.music.126.net\u002FLSRuQ41KTobByAc-XHuQSA==\u002F109951165470281204.jpg",
      "canDislike": true,
      "trackNumberUpdateTime": 1606048468087,
      "playCount": 4526557,
      "trackCount": 571,
      "highQuality": false,
      "alg": "cityLevel_unknow"
    }, {
      "id": 5200944839,
      "type": 0,
      "name": "欧美流行歌曲｜好听到单曲循环",
      "copywriter": "热门歌单推荐",
      "picUrl": "http:\u002F\u002Fp2.music.126.net\u002FNM-wa_-u-H-fWrwk1CCg9w==\u002F109951165329812130.jpg",
      "canDislike": true,
      "trackNumberUpdateTime": 1606234411426,
      "playCount": 270512,
      "trackCount": 62,
      "highQuality": false,
      "alg": "hot_server"
    }],
    "isExpandDownload": false,
    "downloadPicUrl": "https:\u002F\u002Fp1.music.126.net\u002FM5oskkknIRHTcr81ZgD_0g==\u002F109951164194361654.png?imageView=1&thumbnail=320x0"
  },
  "userAgent": "Mozilla\u002F5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit\u002F605.1.15 (KHTML, like Gecko) Version\u002F13.0.3 Mobile\u002F15E148 Safari\u002F604.1"
};
val = val.Home.result
const list = db.collection('playlist').get()
let newData = []
// for(let i=0;i<val.length;i++){
//   let flag = true
//   for(let j=0;j<list.lengthl;j++){
//     if(val[i].id === list.data[j].id){
//       flag = false
//       break
//     }
//   }
//   if(flag){
//     newData.push(val[i])
//   }
// }


// 云函数入口函数
exports.main = async (event, context) => {

  for(let i=0;i<val.length;i++){
    await db.collection('playlist').add({
      data:{
        ...val[i],
        createTime:db.serverDate()
      }
    })
  }
  return {
    code:200
  }
}