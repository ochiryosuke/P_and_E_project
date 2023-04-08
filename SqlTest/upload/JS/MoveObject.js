AFRAME.registerComponent('moveobject', {
  tick: function(delta) {
    
    var obj = this.el;

    //rotはARマーカーの角度。BoxSearcherから取ってきている
    obj.object3D.position.x += rot.z * -0.0005;
    obj.object3D.position.z += (90 - rot.x) * -0.0005;

    console.log("obj.x"+obj.object3D.position.x);
  },
});