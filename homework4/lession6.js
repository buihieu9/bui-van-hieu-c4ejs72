const a = [
   { 
       task : 'HTML',
       complete : false,
   },

    { 
        task : 'CSS',
        complete : false,
    },

    { 
        task : 'Basics Of Javascript',
        complete : false,
    },

    { 
        task : 'Node Package Manager(npm)',
        complete : false,
    },

    { 
        task : 'Git',
        complete : false,
    },

]
function show() {
    for(let i = 0; i<a.length; i++)
        {
            console.log(`${i+1}.${a[i]['task'] } \n complete : ${a[i]['complete']}`)
        }
}
let  c= prompt('enter your command(new,dekete,update,complete)').toLocaleLowerCase();

if(c==='new')
    {
        let b=prompt('enter new task')
        a.push
        (
            {
                task : b ,
                complete : false,
            }
        )
        show()
    }
 if(c ==='update')
     {   
     let b = prompt('enter position')
    if(Number.isNaN(b)){
        console.log('nhập số giùm')
    }else
    {    let d=prompt('enter new title')
         for(let i = 0 ; i<a.length; i++ )
        {
        
        a[b].task=d
        console.log(`${i+1}.${a[i]['task'] } \n complete : ${a[i]['complete']}`)
        }

    }
 } 
 if(c === 'complete')
 { 
    let b = prompt('enter position')-1
    if(Number.isNaN(b)){
        console.log('nhập số giùm')
    }
    else { 
        a[b].complete = true;
    } 
    show()
 }  
 if(c === 'delete'){
    let b = prompt('enter position')-1
    if(Number.isNaN(b)){
        console.log('nhập số giùm')
    }
    else { 
        a.splice(b,1)
    }
show()
 }
if( c === 'print'){
    for(let i = 0;i < a.length; i++) {
        if(a[i].complete){
    console.log(`${i+1} [x] ${a[i].task}`)
        }else
        console.log(`${i+1} [] ${a[i].task}`)

    }
}   
