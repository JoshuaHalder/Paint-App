var MouseEvent="Empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=2;

canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){
    MouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){
  current_position_of_x=e.clientX-canvas.offsetLeft;
  current_position_of_y=e.clientY-canvas.offsetTop;
  if(MouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle="black";
      ctx.lineWidth=width;
      console.log("last position of X="+last_position_of_x+"last position of Y="+last_position_of_y);
      ctx.moveTo(last_position_of_x,last_position_of_y);
      console.log("current position of x="+ current_position_of_x+"current position of y="+ current_position_of_y);
      ctx.lineTo(current_position_of_x, current_position_of_y);
      ctx.stroke();
  }
  last_position_of_x=current_position_of_x;
  last_position_of_y=current_position_of_y;
}