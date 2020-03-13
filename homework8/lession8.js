const timeSheetData = [
    {
        Project:'Learn front-end',
        Task: 'Learn HTML',
        TimeSpent: 6
    },
    {
        Project:'Learn front-end',
        Task: 'Learn CSS',
        TimeSpent: 8
    },
    {
        Project:'Learn front-end',
        Task: 'Learn JS Variables and Data Types',
        TimeSpent: 6
    },
    {
        Project:'Learn Git',
        Task: 'Learn Git Basics',
        TimeSpent: 2
    }
]

var tbody = document.querySelector('#body')
var project = document.querySelector('#project')
var task = document.querySelector('#task')
var timeSpent = document.querySelector('#timespent')
var add = document.querySelector('#add')
var thead = document.querySelector('#title')

for(let x in timeSheetData) {
    tbody.innerHTML += ` <tr>
    <td>${timeSheetData[x].Project}</td>
    <td>${timeSheetData[x].Task}</td>
    <td>${timeSheetData[x].TimeSpent}</td>
    <td><button onClick ="removeLine(${x})" >X</button>
    <button onclick ="update(${x})"> U </button></td>
 </tr>`
}

add.addEventListener('click', function() {
    if(add.innerText === 'ADD') {
        timeSheetData.push({
            Project: project.value,
            Task : task.value,
            TimeSpent : timeSpent.value
        })
        tbody.innerHTML += ` <tr>
        <td>${timeSheetData[timeSheetData.length-1].Project}</td>
        <td>${timeSheetData[timeSheetData.length-1].Task}</td>
        <td>${timeSheetData[timeSheetData.length-1].TimeSpent}</td>
        <td><button onClick ="removeLine(${timeSheetData.length-1})" >X</button>
        <button onclick ="update(${timeSheetData.length-1})"> U </button></td>
     </tr>`
    }
    else {
        timeSheetData[i] = {
            Project: project.value,
            Task: task.value,
            TimeSpent: timeSpent.value,
        }
        const b = document.querySelectorAll("#body tr")
        b[i].innerHTML = `<tr>
        <td>${timeSheetData[i].Project}</td>
        <td>${timeSheetData[i].Task}</td>
        <td>${timeSheetData[i].TimeSpent}</td>
        <td><button onclick ="removeLine(${i})"> X </button>
        <button onclick ="update(${i})"> U </button></td>
        </tr>`
        add.innerText = 'ADD'
    }
    console.log(timeSheetData)
})
const action = document.createElement('th')
action.innerText= 'Action' ;
thead.appendChild(action)

function removeLine(index)
{
    const line  = document.querySelectorAll("#body tr")
    line[index].innerHTML = ""
}

function update(index)
{
    project.value = timeSheetData[index].Project
    task.value = timeSheetData[index].Task
    timeSpent.value = timeSheetData[index].TimeSpent
    add.innerText = 'Update'
   
    return i = index
 
}

var clear = document.querySelector('#clear')

clear.addEventListener('click',function() {
    project.value = "";
    task.value = "";
    timeSpent.value = "";
    add.innerText = 'ADD'
})

