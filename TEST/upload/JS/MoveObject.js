//他のやり方を思いつくまではグローバル変数を仮使用
var isIntersect = false;//壁に当たったらtrueになる
var ballPos = 0;

AFRAME.registerComponent('moveobject', {
  tick: function(delta) {
    
    var obj = this.el;
    ballPos = obj.object3D.position;

    if(!isIntersect)
    {
      //rotはARマーカーの角度。BoxSearcherから取ってきている
      obj.object3D.position.x += rot.z * -0.0005;
      obj.object3D.position.z += (90 - rot.x) * -0.0005;
      //console.log("球の動きを反映");
    }
    else
    {
      //xかzどちらが当たっているか確認し、当たっていない方向へは動けるようにする
      //console.log("衝突！");
    }

    //console.log("x: "+rot.x+"y: "+rot.y+"z: "+rot.z);//玉の位置
    //console.log("obj.rot.y: "+obj.object3D.rotation.y);//玉の進行方向
    //console.log("atan"+Math.atan(rot.z / (90 - rot.x)));//玉の進行方向(ラジアンバージョン)
  },
});