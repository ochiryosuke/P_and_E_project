AFRAME.registerComponent('ball', {
    tick: function(delta) {

        var obj = this.el;

        obj.object3D.position.x += 1;
    }
});