"use strict"



const mouse = document.querySelectorAll("button") [0];
const key = document.querySelectorAll("button") [1];


// With mouse
mouse.addEventListener("mouseup", (event) => {
    switch (event.button) {
        case 0:
            console.log("left button was clicked");
            break;
        case 2:
            console.log("right button was clicked");
            break;
    }
});

// With keyboard
key.addEventListener("keyup", (event) => {
    let x = event.key;
        console.log(`You clicked ${x}`)
    
});


// antra

// const btn = document.querySelectorAll("button")

// console.log(btn)


// btn.addEventListener("keyup", (event) => {
//     console.log(event)
// });