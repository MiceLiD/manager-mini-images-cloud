//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../assets/images/image/swiper01.jpg',
      '../../assets/images/image/swiper02.jpg',
      '../../assets/images/image/swiper03.jpg'
    ],
    menus: [
      {
        iconUrl: '../../assets/images/image/swiper03.jpg',
        text: '注册公司'
      },
      {
        iconUrl: '../../assets/images/image/swiper03.jpg',
        text: '记账报税'
      },
      {
        iconUrl: '../../assets/images/image/swiper03.jpg',
        text: '公司变更'
      },
      {
        iconUrl: '../../assets/images/image/swiper03.jpg',
        text: '代购发票'
      },
      {
        iconUrl: '../../assets/images/image/swiper03.jpg',
        text: '金融贷款'
      }
    ]
  },
  //事件处理函数
  navigateTo: function(e) {
    const { currentTarget } = e
    const { dataset } = currentTarget
    console.log(dataset)
    wx.navigateTo({
      url: `/pages/detail/detail?text=${dataset.props.text}`,
    })
  }
})
