//lession12
clear()
const cmds = [
  {
    shape: "circle",
    x: 0,
    y: -20,
    radius: 60
  },
  {
    shape: "circle",
    x: 0,
    y: 80,
    radius: 40
  },
  {
    shape: "circle",
    x: -75,
    y: 10,
    radius: 20
  },
  {
    shape: "circle",
    x: 75,
    y: 10,
    radius: 20
  },
  {
    shape: "square",
    x: -65,
    y: -100,
    width: 30
  },
  {
    shape: "square",
    x: 38,
    y: -100,
    width: 30
  },

  {
    shape: "rect",
    x: -30,
    y: 80,
    width: 20,
    height: 4
  },
  {
    shape: "rect",
    x: 10,
    y: 80,
    width: 20,
    height: 4
  },
  {
    shape: "rect",
    x: -10,
    y: 50,
    width: 20,
    height: 6
  },
   {
        shape: "square",
        x: 50,
        y: 50,
        width: 20
      }

];
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
    if(c.shape === 'circle')
    {
        for( let i = 0;i < 100; i++)
        {
            fd(5)
            rt(360/95)
        }
    }
  home()
}





        
