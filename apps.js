let buttons = document.getElementsByClassName("buttons")
function printclick(event) {
    let jsonBook = event.target.value
    
    Cookies.set('selection', jsonBook)
}

let counter = 0;
while (counter < buttons.length) {
    buttons[counter].addEventListener(`click`, printclick);
    counter= counter + 1
}


