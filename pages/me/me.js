const util = require('../../utils/util.js')

Page({
  data: {
    // 用户信息
    userInfo: {
      avatarUrl: "",
      nickName: "未登录"
    },
    bType: "primary", // 按钮类型
    actionText: "登录", // 按钮文字提示
    lock: false //登录按钮状态，false表示未登录
  },
  // 页面加载
  onLoad: function () {
    // 获取本地数据-用户信息
    wx.getStorage({
      key: 'userInfo',
      // 能获取到则显示用户信息，并保持登录状态，不能就什么也不做
      success: (res) => {
        wx.hideLoading();
        this.setData({
          userInfo: {
            avatarUrl: res.data.userInfo.avatarUrl,
            nickName: res.data.userInfo.nickName,
            extra: res.data.userInfo.extra
          },
          bType: res.data.bType,
          actionText: res.data.actionText,
          lock: true
        })
      }
    });
  },
  // 登录或退出登录按钮点击事件
  bindAction: function (e) {
    const { detail } = e
    const { rawData } = detail
    const userInfo = JSON.parse(rawData)
    const { nickName, gender, city, province, country, avatarUrl } = userInfo
    this.data.lock = !this.data.lock
    // 如果没有登录，登录按钮操作
    if (this.data.lock) {
      this.setData({
        userInfo: {
          avatarUrl,
          nickName,
          extra: {
            gender: gender === 1 ? 'boy' : 'girl',
            location: `${country} ${province} ${city}`
          }
        },
        bType: "warn",
        actionText: "退出登录"
      });
      // 存储用户信息到本地
      wx.setStorage({
        key: 'userInfo',
        data: {
          userInfo: {
            avatarUrl,
            nickName,
            extra: {
              gender: gender === 1 ? 'boy' : 'girl',
              location: `${country} ${province} ${city}`
            }
          },
          bType: "warn",
          actionText: "退出登录"
        },
        success: function (res) {
          console.log("存储成功")
        }
      })
      // 如果已经登录，退出登录按钮操作     
    } else {
      wx.showModal({
        title: "确认退出?",
        content: "真是个狼灭，😕",
        success: (res) => {
          if (res.confirm) {
            console.log("确定")
            // 退出登录则移除本地用户信息
            wx.removeStorageSync('userInfo')
            this.setData({
              userInfo: {
                avatarUrl: "",
                nickName: "未登录"
              },
              bType: "primary",
              actionText: "登录"
            })
          } else {
            console.log("cancel")
            this.setData({
              lock: true
            })
          }
        }
      })
    }
  }
})