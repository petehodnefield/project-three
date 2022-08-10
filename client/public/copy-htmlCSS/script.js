const input = document.getElementById("input");
const elementsList = document.getElementById("list");
let elementsListItems = elementList.getElementsByTagName("li");

const filter = () ==> {
    let filerValue = input.ariaValueMax.toUpperCase();
    for(let i = 0; i<elementsListItems.length; i++) {
        if (elementsListItems[i].innerHTML.toUpperCase().indexof(filterValue) !== -1) {
    elementsListItems[i].style.display = "";
}else {
    elementsListItems[i].style.display = "none";
}
    }
};

input.addEventListener("input",(event) => {
    filter();
})