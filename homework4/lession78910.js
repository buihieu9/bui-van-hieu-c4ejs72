// 7
clear()
rt(90)
const pos = {x:200,y : 50,}
penup()
fd(pos.x/2)
lt(90)
fd(pos.y)
 
//8
clear()
rt(90)
const pos = {x:200,y : 50, white:20,}
penup()
fd(pos.x/2)
lt(90)
fd(pos.y)
pendown()
for(i = 0; i<=3 ;i++){
   fd(pos.white)
   lt(90)
 }

 // 9
 clear()
rt(90)
const pos = {x:200,y : 50, white:20,height: 40}
penup()
fd(pos.x/2)
lt(90)
fd(pos.y)
pendown()
for(i = 0; i<=3 ;i++){
   if(i%2==0)
   {
     fd(pos.height)
     rt(90)
   }
  else
  {
   fd(pos.white)
   rt(90)
   }
   
 }
 // lession 10
 clear()
const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
]
for(let c of cmds){
    rt (90)
  penup()
    fd(c.x)
    lt(90)
    fd(c.y)
    pendown()

    if(c.shape === 'square'){
        for(let i = 0; i< 4; i++){
            fd(c.width)
            rt(90)
        }
       
    }
    if(c.shape === 'rect')
    {
     
        for(let i = 0 ; i < 2 ; i++)
        {
            
            fd(c.height)
            rt(90)
            fd(c.width)
            rt(90)
        }
    }
  home()
}




