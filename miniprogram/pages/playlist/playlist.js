// pages/playlist/playlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperUrl: [
      '../../images/assets/5-6_images/1.jpg',
      '../../images/assets/5-6_images/2.jpg',
      '../../images/assets/5-6_images/3.jpg'
    ],
    start:0,
    playList: [ ],
    openid: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res)
      this.setData({
        openid: res.result.openid
      })
    })
    this._getplaylist()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.cloud.callFunction({
      name:'music',
      data:{
        "start":0,
        "count":3
      }
    }).then((res)=>{   
      console.log(res.result.data)
      this.setData({
        start:3,
        playList:res.result.data
      })
      wx.stopPullDownRefresh()
     //
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getplaylist()
  },
  _getplaylist:function(){
    wx.cloud.callFunction({
      name:'music',
      data:{
        "start":this.data.start,
        "count":this.data.start+3
      }
    }).then((res)=>{   
      console.log(res.result.data)
      this.setData({
        start:this.data.start+3,
        playList:this.data.playList.concat(res.result.data) 
      })
      wx.hideLoading()
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})