
let container = document.getElementById("container")
let boxes = document.querySelectorAll(".box")
let clickedBoxes = document.querySelectorAll(".clicked")
let update = JSON.parse(localStorage.getItem("data"))   
let firstBox = document.getElementById("firstBox")
let arr = localStorage.getItem("data" )? JSON.parse(localStorage.getItem("data")): []
//  var muscles = '"💪🏾"'
//  var x =  '"❌"'
 
// var trackIcon = "X"


// let musclesIcon = document.getElementById("muscles")
// let xIcon = document.getElementById("x")

// musclesIcon.addEventListener("click",{
//     trackIcon = muscles
// })


firstBox.addEventListener("click", function firstTick (){
    firstBox.textContent = "❌"
    arr.push(1)
    localStorage.setItem("data", JSON.stringify(arr))
    add()
})


localStorage.setItem("data",JSON.stringify(arr))
let data = JSON.parse(localStorage.getItem("data"))


 function add (){
    var newBox = document.createElement("div")
    newBox.classList.add("box")
    container.appendChild(newBox)
    newBox.addEventListener("click",  function tick (){
    // need this if statement otherwise you can click on a box with an x inside of it and it will add another box, which is problematic because it looks bad and when the page is refereshed the local storage is messed up because too many boxes have been pushed to arr
    if(newBox.textContent != "❌" ){
    newBox.textContent = "❌"
    arr.push(1)
    localStorage.setItem("data", JSON.stringify(arr))
    add()}
    }
 ) 
     
}

  function render (){
    let savedBox = document.createElement("div")
    savedBox.classList.add("box")
    container.appendChild(savedBox)
    savedBox.textContent = "❌"
    console.log(boxes.length)
 }
 
 
function display() {
    
localStorage.setItem("data",JSON.stringify(arr))
console.log(data)
firstBox.textContent = JSON.parse(localStorage.getItem("data")).length > 0 ? "❌" : ""
// data.forEach(item => {
//     render() 

// })


for( var i = 1; i < data.length; i++){
    render()
}




//needed the line below so that add runs and adds a new box ontop of the stored  boxes only if there are stored boxes, otherwise the event listener on the fist box will do the job
if(firstBox.textContent) {
    //problem is somewhere here when the page refreshes 
    console.log("fired")
    add()
}


}



let clearHistory = document.getElementById("clear")
//need to work on this so that it removed all the boxes apart from the first one otherwise after clearing history and then startin again it doesnt work properly unless browser is refreshed
clearHistory.addEventListener("click", function clear(){
    localStorage.clear()
     while(container.firstChild){
         container.removeChild(container.firstChild)
     }
     
     location.reload()
})


display()
// add()


























