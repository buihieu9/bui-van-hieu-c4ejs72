//lession1
let g = 'ueoai'
let b = ' '
function censoredString(a) {
  for(let c in a){
    if(g.includes(a[c])) {
        b = b + '*'
    }
    else {
        b = b + a[c]
    }
  }
  return b
}
console.log(censoredString('hello'))

//lession 2
function getFrequencies(arr)
{
    let object = {}
    for(let i of arr){
        if(!object[i]) object[i] = 1 ;
        else object[i]++
    }
    return object;
}
console.log(getFrequencies(["A", "B", "c", "c", "A"]))

//lession 3
function keysAndValues(object)
{
    let newArr = []
    for(let x in object)
    {
        newArr.push(x)
    }
    for(let x in object)
    {
        newArr.push(object[x])
    }
    return newArr;
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))

//lession 4

function khaBanh(string)
{
    let newstring = ""
    let index = 1;
    for(let x of string)
    {
        if(index %2 != 0 ) newstring += x.toUpperCase()
        else newstring += x
        index++
    }
    return newstring;
}
console.log(khaBanh('hello'))

// lession5
function mapLetters(string)
{
    let object = {}
    for(let i = 0; i < string.length ;i ++)
    {
        let arr = []
        for(let j = 0;j <=string.length; j++)
        {
            if(string[j] === string[i]) arr.push(j)
        }
        object[string[i]] = arr
    }
    return object
}
console.log(mapLetters('dodo'))

// lesion 6
object = {
    'Nguyen Minh Huy': 'name',
    'MindX C4E': 'class'
}
for(let x in object)
{
    let temp,temp2;
    temp = x;
    temp2 = object[x]
    delete object[x]
    object[temp2] = temp 
}
console.log(object)
