

function loadCanvas() {
  var canvas = document.getElementsByTagName('canvas')[0],
  ctx = null,
  grad = null,
  body = document.getElementsByTagName('body')[0],
  color = 255;

  if (canvas.getContext('2d')) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 600);
    ctx.save();
    // Create radial gradient
    grad = ctx.createRadialGradient(0,0,0,0,0,600); 
    grad.addColorStop(0, '#000');
    grad.addColorStop(1, 'rgb(' + color + ', ' + color + ', ' + color + ')');
  
    // assign gradients to fill
    ctx.fillStyle = grad;
  
    // draw 600x600 fill
    ctx.fillRect(0,0,600,600);
    ctx.save();
  
    //body.onmousemove = function (event) {
    //body.onload = function (event) {
      console.log('onload');
  
      var width = window.innerWidth, 
          height = window.innerHeight, 
  //        x = width / 2,
  //        y = height / 2,
  //        x = event.clientX, 
  //        y = event.clientY,
          x1 = 280,
          y1 = 400,
          x2 = 600,
          y2 = -25,
          rx = 600 * x2 / width,
          ry = 600 * y2 / height;
      var div = document.getElementById('cursor');
          
      var xc = ~~(256 * x1 / width);
      var yc = ~~(256 * y1 / height);
      div.innerHTML = 'x: '+x2+', y: '+y2+'&nbsp;&nbsp;&nbsp;&nbsp;'+'xc: '+xc+', yc: '+yc;
  
      grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 600); 
      grad.addColorStop(0, '#000');
      grad.addColorStop(1, ['rgb(', Math.ceil(xc/2), ', ', Math.ceil((255 - xc)/2), ', ', Math.ceil(yc/2), ')'].join(''));
      div.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;'+'rgb('+ Math.ceil(xc)+ ', '+ Math.ceil((255 - xc)/2)+ ', '+ Math.ceil(yc*3/4)+ ')';
      // ctx.restore();
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,600,600);
      // ctx.save();
    //};
  }
}