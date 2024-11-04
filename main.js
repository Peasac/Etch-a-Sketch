const container = document.querySelector(".container");
function Grid(input) {
    
    
    for(let i = 0; i<input;i++)
    {
        const column = document.createElement('div');
        column.classList.add("column");
        for(let j =0;j<input;j++)
        {
            const row = document.createElement('div');
            row.classList.add("row");
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    const row= document.querySelectorAll(".row");
    const clear = document.querySelector(".Clear")
    clear.addEventListener("click", () => {
    row.forEach(row => {
        row.style.backgroundColor = "white";
    });
})
}
Grid(20);

const Change = document.querySelector(".Change");
const New = document.createElement("div");
Change.addEventListener("click", () => {
    
    if(Change.parentElement.contains(New) == true){
        input();}
    else {
       
        New.innerHTML = '<input class="inp" type ="text"></input>';
        Change.parentElement.appendChild(New);
        input();
    }
})
const new1 = document.createElement("div");
function input() {

    const inp = document.querySelector(".inp");
    inp.addEventListener("input", (event) => {
        Change.parentElement.appendChild(new1);
        if (+event.target.value > 100 || +event.target.value<=0)
        {
            new1.innerHTML = "Please select between 0 and 100";
            Change.parentElement.appendChild(new1);
            
            
        }
        else 
        {
            container.textContent = '';
            Grid(parseInt(event.target.value));
            Change.parentElement.removeChild(new1);
            
        }
        
    })
}

const row= document.querySelectorAll(".row");




container.addEventListener("mouseover", (event) => {
    let defOpacity;
        console.log(+event.target.style.opacity)
        
            defOpacity = +event.target.style.opacity;
        
            defOpacity += 0.3;
            event.target.style.opacity = defOpacity;
            
            ///event.target.style.opacity = defOpacity;
        
        
        if (event.target.style.backgroundColor === "") {
            const randomColor = `rgb(${color()}, ${color()}, ${color()})`;
            event.target.style.backgroundColor = randomColor;
        }
        
    
});






const clear = document.querySelector(".Clear")
clear.addEventListener("click", () => {
    row.forEach(row => {
        row.style.backgroundColor = "";
    });
})
function color(){
    return Math.floor(Math.random()*256)
}

