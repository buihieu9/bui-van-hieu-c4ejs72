//lession5
let a =prompt('enter a sequence of numbers separated by commas (,)').split(',')
var sum=0
for(i=0;i<a.length;i++){
sum+=Number(a[i])
}

console.log(sum)

//lession6
let a =prompt('enter a sequence of numbers separated by commas (,)').split(',')
var b=a[0];
for(i=1;i<a.length;i++){
    if(b>a[i]){
        b=a[i]
    }
}
console.log('số nhỏ nhất là' + b)
