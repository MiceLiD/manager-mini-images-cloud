//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    menus: [
      {
        iconUrl: '../../assets/images/image/swiper01.jpg',
        title: '办公室出租',
        details: [
          {
            sub_title: '办公室出租',
            url: ''
          }
        ]
      },
      {
        iconUrl: '../../assets/images/image/swiper02.jpg',
        title: '客户管理系统',
        details: [
          {
            sub_title: '客户管理系统',
            url: ''
          }
        ]
      },
      {
        iconUrl: '../../assets/images/image/swiper03.jpg',
        title: '红本租赁凭证',
        details: [
          {
            sub_title: '3个月红本租赁凭证',
            url: ''
          },
          {
            sub_title: '6个月红本租赁凭证',
            url: ''
          },
          {
            sub_title: '12个月红本租赁凭证',
            url: ''
          }
        ]
      }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
