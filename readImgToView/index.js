var myFile = document.querySelector('.my_file')

myFile.addEventListener(
  'change',
  function(e) {
    var file = e.target.files[0]
    // 图片转base64
    imgToBase64(file, function(dataUrl) {
      // 动态创建画布
      var canvasEle = createCanvas(dataUrl)
      // 追加到视图
      document.body.appendChild(canvasEle)

      // 上传图片
      uploadFile(dataUrl)
    })
  },
  false
)

/**
 * 图片转base64
 */
function imgToBase64(file, callback) {
  var fileReader = new FileReader()
  fileReader.onload = function(e) {
    var dataUrl = this.result
    console.log('获取图片base64:')
    console.log(dataUrl)
    callback(dataUrl) // 回调
  }
  fileReader.readAsDataURL(file)
}

/**
 * 动态创建图片
 */
function createImg(dataUrl, callback) {
  // 动态创建图片元素
  var img = document.createElement('img')
  // img图片加载完毕
  img.onload = function() {
    callback(img, img.width, img.height)
  }
  // 设置图片src
  img.src = dataUrl
}

/**
 * 动态创建画布
 */
function createCanvas(dataUrl) {
  // 动态创建画布元素
  var canvas = document.createElement('canvas')
  // 获取2d上下文
  var ctx = canvas.getContext('2d')
  // 创建图片
  createImg(dataUrl, function(img) {
    var imgW = img.width;
    var imgH = img.height;
    // 设置画布宽高
    canvas.width = imgW;
    canvas.height = imgH;
    ctx.drawImage(img, 0, 0, imgW, imgH);
  })
  // 绘制
  return canvas
}

/**
 * 上传图片
 */
function uploadFile(dataUrl) {
  var formData = new FormData()
  formData.append('head', dataUrl)
  console.log('表单数据打印：')
  console.log(formData.get('head'))

  // 发送异步上传请求 注意无需对数据进行处理 也不需要设置请求头
  // $.ajax({
  //   url: '',
  //   type: 'post',
  //   processData: false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
  //   contentType: false, // 不设置Content-type请求头
  //   data: formdata,
  //   success: function (res) {
  //     console.log(res);
  //   }
  // })
}
