AFRAME.registerComponent('moveobject', {
  tick: function(delta) {
    
    var marker = this.el;
    marker.object3D.position.x += rot.z * -0.00001;
    marker.object3D.position.z += (90 - rot.x) * -0.00001;


    console.log((rot.x));
  },
});