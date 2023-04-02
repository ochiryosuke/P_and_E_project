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
    },

    tick: function(delta) {

      var marker = this.el;

      const rot = marker.getAttribute('rotation');
      console.log("x："+rot.x+"y："+rot.y+"z："+rot.z);
  },

  tick: function (time, timeDelta) 
	{
    console.log("回転中");
		this.el.object3D.rotation.y += 0.01
	}
});