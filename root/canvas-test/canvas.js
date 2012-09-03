
function draw() {
  var canvas = document.getElementById('tutorial'); // gets our canvas DOM node
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
	/*  shape exercises (rectangles)
      ctx.fillStyle = "rgb(200,0,0)";  
      ctx.fillRect (10, 10, 55, 50);  
  
      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";  
      ctx.fillRect (30, 30, 55, 50);  	
	
	  ctx.fillRect(25,25,100,100);
	  ctx.clearRect(45,45,60,60);
	  ctx.strokeRect(50,50,50,50);
    */
	
	/* path exercises (Triangle)
	  ctx.beginPath();  // prepares to draw a path
	  ctx.moveTo(75,50);  // path starting point
	  ctx.lineTo(100,75);  
	  ctx.lineTo(100,25);  
	  ctx.fill(); // fills and draws the shape (triangle) to the canvas
	*/
	
	/* path exercises (target) 
	  ctx.beginPath();
	  ctx.arc(80,80,50,0,Math.PI*2,true);
	  ctx.fill();
	
	  ctx.fillStyle = "white";
	  ctx.beginPath();
	  ctx.arc(80,80,30,0,Math.PI*2,true);
	  ctx.fill();
	
	  ctx.fillStyle = "black";
	  ctx.beginPath();
	  ctx.arc(80,80,10,0,Math.PI*2,true);
	  ctx.fill();

	  ctx.beginPath();	
	  ctx.moveTo(80,30);
	  ctx.lineTo(80,130);
	  ctx.stroke();
	*/
	
	/* color and styling example 	
	for (var i=0;i<255;i++) {
	  for (var j=0;j<255;j++) {
	    // rgb(255,255,255); // white
	    ctx.fillStyle = 'rgb( 200,' + Math.floor(255-(i)) + ',' + Math.floor(255-(j)) + ')';
		ctx.fillRect(j,i,1,1);
	  }
	}
	*/
	
	/* line width example (with line caps) 
	var cap = ['butt', 'round', 'square'];
	for (var k = 0; k < 3; k += 1) {
	  ctx.lineCap = cap[k];
	  for (var i = 0; i < 10; i += 1) {
	    ctx.lineWidth = 1 + i;
  	    ctx.beginPath();
	    ctx.moveTo((k * 160) + 5 + (i * 14), 5);
	    ctx.lineTo((k * 160) + 5 + (i * 14), 140);
	    ctx.stroke();
	  }
	}
	*/
	
	/* simple gradient example 
	// create gradient
	var lin_gradient = ctx.createLinearGradient(0,0,0,400);
	lin_gradient.addColorStop(0,'white');
	lin_gradient.addColorStop(1,'blue');
	// assign gradient to a fill style, and draw
	ctx.fillStyle = lin_gradient;
	ctx.fillRect(0,0,400,400);
	*/
	
	/* complex gradient example 
	// create landscape gradient
	var lin_gradient = ctx.createLinearGradient(0,0,0,400);
	lin_gradient.addColorStop(0,'blue');
	lin_gradient.addColorStop(0.7,'white');
	lin_gradient.addColorStop(0.7,'green');
	lin_gradient.addColorStop(1,'brown');
	// assign gradient to a fill style, and draw
	ctx.fillStyle = lin_gradient;
	ctx.fillRect(0,0,400,400);
	// create sun gradient
	var rad_gradient = ctx.createRadialGradient(400,0,0,400,0,60);
	rad_gradient.addColorStop(0,'rgb(255,255,0)');
	rad_gradient.addColorStop(0.7,'rgb(255,255,120)');
	rad_gradient.addColorStop(1,'rgba(255,255,255,0)');
	// assign gradient to a fill style, and draw
	ctx.fillStyle = rad_gradient;
	ctx.beginPath();
	ctx.arc(400,0,50,Math.PI,Math.PI/2,true);
	ctx.lineTo(400,0);
	ctx.fill();	
	*/
	
	/* pattern practice 	
	var ptrn = ctx.createPattern(document.getElementById('brick'),'repeat')
	ctx.fillStyle = ptrn;
	ctx.fillRect(0,0,400,100);
	*/

	/* text practice 
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = "rgba(0,0,0,0.5)";
	
	ctx.font = "20px Time New Roman";
	ctx.fillStyle = "Black";
	ctx.fillText("The Alchemist", 5,130);
	*/
	
	/* Save and Restore Example 
	ctx.fillRect(0,0,150,150);   // Draw a rectangle with default settings  
    ctx.save();                  // Save the default state  
  
    ctx.fillStyle = '#09F'       // Make changes to the settings  
    ctx.fillRect(15,15,120,120); // Draw a rectangle with new settings  
  
    ctx.save();                  // Save the current state  
    ctx.fillStyle = '#FFF'       // Make changes to the settings  
    ctx.globalAlpha = 0.5;      
    ctx.fillRect(30,30,90,90);   // Draw a rectangle with new settings  
	// test here
    ctx.restore();               // Restore previous state  
    ctx.fillRect(45,45,60,60);   // Draw a rectangle with restored settings  
    // test here
    ctx.restore();               // Restore original state  
    ctx.fillRect(60,60,30,30);   // Draw a rectangle with restored settings
	*/
	
	/* scale, rotate, and translate applies to the canvas 
	for (var i=0;i<3;i++) {  
      for (var j=0;j<3;j++) {  
        ctx.save();
	    var lin_gradient = ctx.createLinearGradient(0,0,0,30);
	    lin_gradient.addColorStop(0,'blue');
		lin_gradient.addColorStop(1,'red');
        ctx.strokeStyle = lin_gradient;
		
        ctx.translate(50+j*100,50+i*100); // try translate
		ctx.scale(.2+j*0.4, .2+i*0.4); // try scale
        ctx.arc(20,20,10,0,Math.PI*2,true);
		ctx.stroke();
		ctx.moveTo(0,0);
		
        ctx.restore();  
      }  
    }  
	*/
	
	/* skip the compositing operations */
	
	/* clipping path practice 
	// create clipping path
	ctx.beginPath();
	ctx.arc(210,120,50,0,Math.PI*2,true);
	ctx.clip();
	// create pattern
	var ptrn = ctx.createPattern(document.getElementById('brick'),'repeat')
	ctx.fillStyle = ptrn;
	ctx.fillRect(0,0,400,400);
	*/
		
	/* image practice */
	  ctx.drawImage(document.getElementById('hero'),200,100);
	
  }
}