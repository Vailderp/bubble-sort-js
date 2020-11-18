var array = [];  var im0 , im1;
function input () {
  var deferarray = document.getElementById('text').value;
  for (var i = 0 ; i < deferarray.length ; i++){
      array.push(deferarray[i]);
  }
  for (var l = array.length - 1 ; l > -1 ; l--) {
    for (var i = array.length - 1 ; i > -1 ; i--){
      if(array[i - 1] > array[i]){
        im0 = array[i];
        im1 = array[i - 1];
        array[i] = im1;
        array[i - 1] = im0;
      }
    }
  }
  document.getElementById('defer').innerHTML = deferarray;
  array.forEach(e => {
    document.getElementById('h1').innerHTML += e;
  });
}
