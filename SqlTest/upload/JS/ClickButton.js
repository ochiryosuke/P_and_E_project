      $(function() {

        $('#b1').click(function(e) {
          $('#box1').attr('src', './image/YURUSHITE.jpg');
          console.log("b1ボタンが押されました");
        });

        $('#b2').click(function(e) {
          $('#box1').attr('src', './image/Hand in Hand.png');
          console.log("b2ボタンが押されました");
        });

        $('#b3').click(function(e) {
          $('#box1').attr('src', './image/ロストワンの号哭.jpg');
          console.log("b3ボタンが押されました");
        });
      });