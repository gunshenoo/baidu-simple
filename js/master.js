// 初始化
$(function () {

  // 关键字文本框
  $('#keyword').on('keydown', function() {
    if (event.keyCode == 13) {
      // 回车搜索
      $("#search").click();
    }
  });

  // 搜索按钮
  $('#search').on('click', function() {
    if ($('#keyword').val()) {
      // 搜索关键字
      var url = 'https://www.baidu.com/s?word=';
      url += $('#keyword').val();
      location.href = url;
    } else {
      // 空关键字刷新
      location.reload();
    }
  });
  
});
