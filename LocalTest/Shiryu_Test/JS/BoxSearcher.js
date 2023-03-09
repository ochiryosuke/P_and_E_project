AFRAME.registerComponent('box1', {
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
    }
  });