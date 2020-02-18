//lession 7
const a = [01,12,23,34,45,06,57,28,97] ;
let b = Number(prompt('nhập số đề muốn đánh')) ;
var c = 0;
if(Number.isNaN.b){
    alert('nhập số giùm con má ơi')
}else if(!Number.isNaN.b)
{
    for(i=0;i<a.length;i++)
    {   
            if(b==a[i])
            {
                alert('the index of the number in array is:'+i)
                c=1
            }
    }
    if(c==0) alert('can\'t found the number in array')
   

 }
// full lession 8
var a = [5 , 7 , 300 , 90 , 24 ,50 , 75]
console.log('Hello, my name is Nam and here is my sheep sizes:\n',...a)
var b = a[0]
var money = 2;
var sum = 0;
for(m=1;m<4;m++){
    b=a[0]
    for(i=0;i<a.length;i++){
        if(b<a[i]){
            b=a[i]
        }
    } 
  console.log('Now my biggest sheep has size '+ b +' let\'s shave it')
    for(j=0;j<a.length;j++){
        if(b==a[j]){
            a[j]=8
        }
    }
    console.log('after shearing,here is my flock \n ',...a)

    for(s=0;s<a.length;s++){
        
            a[s]+=50  
    }
    console.log('tháng ' + m + ' sau khi vỗ béo thì mấy bé dậy thì thành công \n',...a)
}
for(v=0;v<a.length;v++){
    sum+=a[v]
    
}
console.log('số tiền bán mấy bé cừu ='+(sum*money))
