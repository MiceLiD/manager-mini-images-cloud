//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    newsList: []
  },
  onLoad() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ccbe84259548f2854decbab/company-creative/news-list',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        this.setData({
          newsList: res.data.data.list
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  handleOnNewsItem(e) {
    const { currentTarget } = e
    const { props } = currentTarget.dataset
    const { id } = props
    wx.navigateTo({
      url: `/pages/article-detail/detail?articleId=${id}`
    })
  }
})
