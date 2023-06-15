let count=0
let countEl=document.getElementById("count-el")

function increment(){
    count+=1
    countEl.textContent=count
}

let saveEl=document.getElementById("save-el")
saveEl.textContent="Previous Entries: "

function save(){
    saveEl.textContent+=count+" - "
    count=0
    countEl.textContent=0
}