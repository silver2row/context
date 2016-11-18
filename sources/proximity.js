// Proximity
var proximitySource = (function(window) {

  var id = 'source-proximity',
      title = 'Proximity',
      enabled = 'mozBluetooth' in navigator; // fxos check

  function start() {
    window.addEventListener('userproximity', function(e) {

      var details = {
        id: 'proximityNear',
        label: 'Things nearby',
        type: 'scalar',
        value: null,
        near: e.near
      };

      if (e.near) {
        // something is near
        details.value = 'Something is very near. Is it a cat?';
      } else {
        // something is no longer near
        details.value = 'Nothing is near.';
      }

      publish(id, details);

    });
  }

  // public
  return {
    id: id,
    title: title,
    enabled: enabled,
    start: start
  };

})(this);
