class FoundMarker {
  founded =  new Boolean();
  id = new String();
}

AFRAME.registerComponent('marker', {
    init: function () {

      const $markers = document.querySelectorAll('a-marker')//a-markerタグのDOM要素を引用
      $markers.forEach((marker) => {//a-markerタグの要素それぞれにイベントを登録
      const $answer = document.querySelector('answer');
      
      console.log($answer)
        // マーカーを検出した際のイベント
        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
        });

        // マーカーを見失った際のイベント
        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);
        });
      });
      
    }
});

MarkerSense = (markerId) => {

}