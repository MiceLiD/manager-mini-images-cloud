// page/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: '',
    pagePic: '',
    pageDetail: {
      title: '',
      advidory: '', // 咨询
      orderUrl: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { text, imgUrl, advidory } = options
    wx.setNavigationBarTitle({
      title: text
    })
    this.setData({
      pageType: text,
      pagePic: imgUrl,
      pageDetail: {
        title: text,
        advidory,
        orderUrl: `/order?type=${text}`
      }
    })
  },
  handleOnAdvidory() {},
  handleOnOrder() {},

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