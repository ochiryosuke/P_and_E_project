AFRAME.registerComponent('boxm3', {
    init: function()
    {

      var marker = this.el;

      marker.addEventListener('markerFound', function () {
        console.log("Desk_Chairを発見した");
        location.href = '/clearWindow';
      });

      marker.addEventListener('markerLost', function () {
        console.log("Desk_Chairを見失った");
      });
    }
});