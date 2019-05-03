//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: Array(3).fill('').map((item, index) => `../../assets/images/image/swipe${index}.jpg`),
    menus: [
      {
        title: '注册公司',
        name: 'register-company'
      }, {
        title: '记账报税',
        name: 'bookkeep-tax'
      }, {
        title: '公司变更',
        name: 'change-company'
      }, {
        title: '社保开户',
        name: ''
      }, {
        title: '对公账户',
        name: 'public-accounts'
      }, {
        title: '各类经营许可',
        name: ''
      }, {
        title: '代购发票',
        name: ''
      }, {
        title: '注册商标',
        name: 'register-mark'
      }, {
        title: '申请专利',
        name: ''
      }, {
        title: '网站/小程序',
        name: ''
      }, {
        title: '公司注销',
        name: ''
      }, {
        title: '税务筹划',
        name: ''
      }
    ].map(item => {
      const { title, name } = item
      return {
        iconUrl: '',
        text: title,
        advidory: '',
        imgUrl: `../../assets/images/image/detail/${name}.jpg`
      }
    })
  },
  //事件处理函数
  navigateTo: function(e) {
    const { currentTarget } = e
    const { props } = currentTarget.dataset
    const { text, imgUrl, advidory } = props
    wx.navigateTo({
      url: `/pages/detail/detail?text=${text}&imgUrl=${imgUrl}&advidory=${advidory}`
    })
  }
})
