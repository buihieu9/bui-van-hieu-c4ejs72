let a = [
    a1 = {
        name: 'xiaomi note 3',
        price: 400,
        brand: 'xiaomi',
        color: 'white',
        category:'phone',
        providers : ['cellphone']
    },
    a2 = {
        name: ' active1',
        price: 220,
        brand: 'vsmart',
        color: 'black' ,
        category:'phone',
        providers :['hell']
    },
    a3 = {
        name: ' note 3',
        price: 500,
        brand: 'sam sung',
        color: 'white',
        category:'phone',
        providers : ['tgdd']
   },
   a4 = {
    name: 'xiaomi 2000mah',
    price: 100,
    brand: 'xiaomi',
    color: 'white',
    category:'charger',
    providers :['tgdd','cellphone','pknbr']

   }
    
]
for(let i = 0;i<a.length;i++){

    console.log(i +'. tên điện thọai : '+a[i].name + '\n' +'giá điện thoại : '+a[i].price )
}
var b = Number(prompt('enter product position'));
for (let d  in a[b])
    { 
                console.log(d,a[b][d])     
    }

var cc=prompt('nhập vào ')
console.clear()
for(let j = 0;j < a.length;j++){
    for(let c in a[j]){
        
        if(a[j][c] === cc){
            console.log(j +' '+ c + ':' + a[j].name + '\n' +
            c + ':' + a[j].price )
        }  
        
    
    }   

}
var cs = prompt('nhập vào nhà cung cáp')
for(let j = 0; j<a.length; j++){
if(a[j]['providers'].indexOf(cc,0)!== -1){
        
    for( let c in a[j]){
        console.log(a[j][c])
    }
   }

}