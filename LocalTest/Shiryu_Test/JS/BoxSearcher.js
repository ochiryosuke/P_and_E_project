let rot = 0;//他のやり方を思いつくまではグローバル変数を仮使用

AFRAME.registerComponent('boxm1', {
    init: function()
    {

      var marker = this.el;

      marker.addEventListener('markerFound', function () {
        console.log("box1を発見した");
        $('#box2').attr('src', './image/maru.png');
      });
      
      marker.addEventListener('markerLost', function () {
        console.log("box1を見失った");
        $('#box2').attr('src', './image/batu.png');
      });
    },
    tick: function(delta) {

      var marker = this.el;
  
      rot = marker.getAttribute('rotation');

      // load(rot);
      //console.log("x："+rot.x+"y："+rot.y+"z："+rot.z);
    },
});