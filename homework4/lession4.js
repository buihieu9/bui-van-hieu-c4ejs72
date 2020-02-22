
var dictionary = {
    debug :'The process of figuring out why your'
    + ' program has a certain error and how to fix it',
    done : 'When your task is complete, the only thing you have to do is to wait' 
   + 'for users to use it (no additional codes or actions needed)',
   defect : 'The formal word for ‘error’',
   pm : 'The short version of Project Manager, the person in charge of the '
   + 'final result of a project',
   ui : 'UI means User Interface',
   ux : 'UX mean User Experience'  
}
alert('hi there, this is dev dictionary')

let a =prompt('enter a keyword')
var b;
for (let x in dictionary)
{
    if(a === x)
    {   
        alert(dictionary[a])
        var aa=0
        break;
    }else{
        b =prompt(`we could not find your word:${a}`)
        dictionary[a] = b ;
        break;
    }

}
let cc = prompt('Enter the keyword')
for (let d  in dictionary)
{
    if(cc === d)
        {   
            alert(dictionary[cc])
            break;
        }  
}