Page({
  data: {
    value: '00 11 2222'
  },
  inputHandler: function (e) {
    console.log(e);
    // 获取value值
    let value = e.detail.value;

    // 同步data value
    this.setData({
      value
    });
  },
  focusHandler: function (e) {
    console.log(e);
    // 获取value值
    let value = e.detail.value;
    console.log(value);
    this.setData({
      value
    });
  }
})