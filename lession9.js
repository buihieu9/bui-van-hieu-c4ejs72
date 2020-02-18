//lession 9
clear()
let a=50;
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
for(i=0;i<colors.length;i++){
  color(colors[i])
   a += 30;
  for(j=0;j<4;j++){
  fd(a)
  lt(360/4)
  }
}