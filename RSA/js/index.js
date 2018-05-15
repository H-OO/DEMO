// 十六进制公钥
var rsa_n =
  "C34E069415AC02FC4EA5F45779B7568506713E9210789D527BB89EE462662A1D0E94285E1A764F111D553ADD7C65673161E69298A8BE2212DF8016787E2F4859CD599516880D79EE5130FC5F8B7F69476938557CD3B8A79A612F1DDACCADAA5B6953ECC4716091E7C5E9F045B28004D33548EC89ED5C6B2C64D6C3697C5B9DD3";

/**
 * 获取DOM
 */
var login_form = document.querySelector('#login_form');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit');

/**
 * 点击登录
 */
login_form.addEventListener('submit', function (e) {
  var e = e || window.event;
  e.preventDefault(); // 阻止默认行为
  // 获取账户名和密码明文文本
  var _username = username.value;
  var _password = password.value;

  // 加密 ↓↓↓
  setMaxDigits(131); //131 => n的十六进制位数/2+3
  var key = new RSAKeyPair("10001", '', rsa_n); //10001 => e的十六进制
  _password = encryptedString(key, _password); //不支持汉字
  // 加密 ↑↑↑

  // 接口参数
  var param = {
    username: _username,
    password: _password
  };
  console.log(param);

  // Ajax...

}, false);