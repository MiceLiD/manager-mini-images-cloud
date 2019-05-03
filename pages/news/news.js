//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    newsList: Array(20).fill('news-').map((news, index) => {
      return `${news}${index}----this is news example...${news}index----this is news example...${news}index----this is news example...${news}index----this is news example...${news}index----this is news example...${news}index----this is news example...${news}index----this is news example...`
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
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
