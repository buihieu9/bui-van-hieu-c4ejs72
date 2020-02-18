// lession 3
const a = [4, 5, 7, -8];
console.log(...a);

//lession4
function show(){for(let i = 0;i<shop.length;i++){
    console.log(i,shop[i])
 }
}
let a=prompt('nhap vào').toLowerCase();
let shop =['gucci','balen','converse','vans']
if(a=='r'){
   show()
}else if(a=='c'){
    
        let a=prompt('thêm hãng')
        shop.push(a)
    show()
}else if(a=='u'){
    let d=Number(prompt('nhập số index'))
     var b=prompt('hãng')
    if(Number.isNaN(d)){
    alert('mời bạn nhập số')
    }else{
    shop[d]=b
    show()
    }    
    
}else if(a=='d'){
    console.log(shop.splice(prompt(),1))
    show()
    
}else alert('bạn nhập sai')
