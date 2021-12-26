window.onload = function() {
  if (window.navigator.systemLanguage == "zh-cn"
  || (window.navigator.language == "zh-CN")) {
    window.location = "./index_zh.html";
  } else {
    window.location = "./index_en.html";
  }
}