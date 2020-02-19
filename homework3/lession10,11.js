//lession10
let a = prompt("Enter the sequence of name")
let c = a.split(",")
let b = [];
for(let i = 0;i<c.length;i++)
    {
        b[i] = "<" + c[i] + ">,"
    }
alert(a,'=>',...b)



//lession11
let a = prompt("Enter the sequence of number")
let b = a.split(",")
let newArry = []
for(let i=0;i<b.length;i++)
    {
      if(b[i]%2 !==0) newArry.push(b[i]+',')
    }
console.log(a,'=>',...newArry)