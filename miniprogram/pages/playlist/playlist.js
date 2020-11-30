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
    playList: [{
        text: "aaaa",
        url: '../../images/assets/5-6_images/1.jpg',
        num:"555"
      },
      {
        text: "bbbb",
        num:"556y5",
        url: '../../images/assets/5-6_images/2.jpg'
      },
      {
        text: "cccc",
        num:"5566565",
        url: '../../images/assets/5-6_images/3.jpg'
      },
      {
        text: "ssss",
        num:"54y5",
        url: '../../images/assets/5-6_images/4.jpg'
      },
      {
        text: "dddd",
        num:"234",
        url: '../../images/assets/5-6_images/5.jpg'
      },
      {
        text: "qqqq",
        num:"2222",
        url: '../../images/assets/5-6_images/6.jpg'
      },
      {
        text: "zzzz",
        url: '../../images/assets/5-6_images/7.jpg'
      },
    ],
    openid: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res)
      this.setData({
        openid: res.result.openid
      })
    })
    wx.request({
      url: 'url',
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})