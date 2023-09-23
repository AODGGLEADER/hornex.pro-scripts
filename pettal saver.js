// remove button
let removeBTN = document.createElement('div');
removeBTN.classList.add("btn");
removeBTN.textContent = "Clear Row";
removeBTN.addEventListener('click', () => { removePrimaryPetals() });
document.querySelector(".btn.shop-btn").before(removeBTN);

// save button
let build1S = document.createElement('div');
build1S.classList.add("btn", "b1", "hidden");
build1S.textContent = "S1";
build1S.addEventListener('click', () => { saveBuild(1) });
document.querySelector(".btn.shop-btn").before(build1S);

let build2S = document.createElement('div');
build2S.classList.add("btn", "b2", "hidden");
build2S.textContent = "S2";
build2S.addEventListener('click', () => { saveBuild(2) });
document.querySelector(".btn.shop-btn").before(build2S);

let build3S = document.createElement('div');
build3S.classList.add("btn", "b3", "hidden");
build3S.textContent = "S3"; // ←change those to customize buttons text.
build3S.addEventListener('click', () => { saveBuild(3) });
document.querySelector(".btn.shop-btn").before(build3S);

let build4S = document.createElement('div');
build4S.classList.add("btn", "b4", "hidden");
build4S.textContent = "S4";
build4S.addEventListener('click', () => { saveBuild(4) });
document.querySelector(".btn.shop-btn").before(build4S);

let build5S = document.createElement('div');
build5S.classList.add("btn", "b5", "hidden");
build5S.textContent = "S5";
build5S.addEventListener('click', () => { saveBuild(5) });
document.querySelector(".btn.shop-btn").before(build5S);

// load button
let build1L = document.createElement('div');
build1L.classList.add("btn", "b1");
build1L.textContent = "DPS";
build1L.addEventListener('click', () => { setBuild(1) });
document.querySelector(".btn.shop-btn").before(build1L);

let build2L = document.createElement('div');
build2L.classList.add("btn", "b2");
build2L.textContent = "Rice";
build2L.addEventListener('click', () => { setBuild(2) });
document.querySelector(".btn.shop-btn").before(build2L);

let build3L = document.createElement('div');
build3L.classList.add("btn", "b3");
build3L.textContent = "Salt";
build3L.addEventListener('click', () => { setBuild(3) });
document.querySelector(".btn.shop-btn").before(build3L);

let build4L = document.createElement('div');
build4L.classList.add("btn", "b4");
build4L.textContent = "Load 4";
build4L.addEventListener('click', () => { setBuild(4) });
document.querySelector(".btn.shop-btn").before(build4L);

let build5L = document.createElement('div');
build5L.classList.add("btn", "b5");
build5L.textContent = "Load 5";
build5L.addEventListener('click', () => { setBuild(5) });
document.querySelector(".btn.shop-btn").before(build5L);

// Apply CSS to buttons
const buttonStyleSave = `
  display: block;
  margin: 0.5px 0;
  width: 15px;
  height: auto;
  padding: 0px 0px; // Adjust the padding as needed
  font-size: 12px; // Adjust the font size as needed
  position: absolute;
  right: -1410px;
  top: -150px;
  background-color: Black; /* Set the background color to green */
  color: white; /* Set text color to white for better visibility */
  border: 3px solid #fff;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5), 0px 0px 20px 10px rgba(0, 0, 0, 0.5); /* Blended white and black shadow *
`;

const buttonStyleLoad = `
  display: block;
  margin: 0.5px 0;
  width: auto;
  height: auto;
  padding: 0px 0px; // Adjust the padding as needed
  font-size: 12px; // Adjust the font size as needed
  position: absolute;
  right: 10px;
  background-color: Black; /* Set the background color to green */
  color: white; /* Set text color to white for better visibility */
  border: 3px solid #fff;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5), 0px 0px 20px 10px rgba(0, 0, 0, 0.5); /* Blended white and black shadow *
`;

const buttonStyleReload = `
display: block;
margin: 0.5px 0;
width: auto;
height: auto;
padding: 0px 0px; // Adjust the padding as needed
font-size: 12px; // Adjust the font size as needed
position: absolute;
top: 140px;
right: 10px;
background-color: Black; /* Set the background color to green */
  color: white; /* Set text color to white for better visibility */
  border: 3px solid #fff;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5), 0px 0px 20px 10px rgba(0, 0, 0, 0.5); /* Blended white and black shadow *
`;

removeBTN.style.cssText = buttonStyleReload;
build1S.style.cssText = buttonStyleSave;
build2S.style.cssText = buttonStyleSave;
build3S.style.cssText = buttonStyleSave;
build4S.style.cssText = buttonStyleSave;
build5S.style.cssText = buttonStyleSave;
build1L.style.cssText = buttonStyleLoad;
build2L.style.cssText = buttonStyleLoad;
build3L.style.cssText = buttonStyleLoad;
build4L.style.cssText = buttonStyleLoad;
build5L.style.cssText = buttonStyleLoad;

// Your existing code for event listeners and functions...

const input = document.querySelector('.chat-input');
const inputName = document.querySelector('.grid .nickname');
let chatFocus = false;
let nameFocus = false;
let mouseMoved = false;
let buttonDisplay = 2;

input.addEventListener('focus', () => {
    chatFocus = true;
});
inputName.addEventListener('focus', () => {
    nameFocus = true;
});
input.addEventListener('blur', () => {
    chatFocus = false;
})
inputName.addEventListener('blur', () => {
    nameFocus = false;
});
document.addEventListener('mousemove', () => {
    mouseMoved = true;
});
 
 
async function removePrimaryPetals() {
    const elements = Array.from(document.querySelectorAll(".petals:not(.small) .petal.empty .petal"));
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const slot = document.querySelector(".petal-rows");
        const longPressEvent = new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            view: window,
            buttons: 1,
            button: 0,
        });
        const mouseUpEvent = new MouseEvent("mouseup", {
            bubbles: true,
            cancelable: true,
            view: window,
            buttons: 0,
        });
        element.dispatchEvent(longPressEvent);
        const top = element.style.top;
        const left = element.style.left;
 
 
        const endTime = Date.now() + 500;
        mouseMoved = false;
        while (Date.now() < endTime) {
            if (mouseMoved) {
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 1));
        }
 
 
 
        let slotTop = slot.style.top;
        slot.style.top = "0%";
        element.dispatchEvent(mouseUpEvent);
        slot.style.top = slotTop;
    }
}
 
 
async function removeAllPetals() {
    const elements = Array.from(document.querySelectorAll(".petals .petal.empty .petal"));
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const slot = document.querySelector(".petal-rows");
        const longPressEvent = new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            view: window,
            buttons: 1,
            button: 0,
        });
        const mouseUpEvent = new MouseEvent("mouseup", {
            bubbles: true,
            cancelable: true,
            view: window,
            buttons: 0,
        });
        element.dispatchEvent(longPressEvent);
        const top = element.style.top;
        const left = element.style.left;
 
 
        const endTime = Date.now() + 500;
        mouseMoved = false;
        while (Date.now() < endTime) {
            if (mouseMoved) {
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 1));
        }
 
 
 
        let slotTop = slot.style.top;
        slot.style.top = "0%";
        element.dispatchEvent(mouseUpEvent);
        slot.style.top = slotTop;
    }
}
 
 
 
 
 
function saveBuild(i) {
    let petalPosition = "";
    let tier = "";
    const petals = Array.from(document.querySelectorAll(".petals .petal.empty .petal"));
    const savedBuild = [];
    for (let i = 0; i < petals.length; i++) {
        if (petals[i].classList.item(2) === "no-icon" || petals[i].classList.item(3) === "no-icon") {
            petalPosition = petals[i].querySelector(".petal-icon").style.backgroundPosition;
        } else {
            petalPosition = petals[i].style.backgroundPosition;
        }
        if (petals[i].classList.item(1) === "spin") {
            tier = petals[i].classList.item(2);
        } else {
            tier = petals[i].classList.item(1);
        }
        savedBuild.push(petalPosition, tier);
    }
    localStorage.setItem(`savedBuild${i}`, JSON.stringify(savedBuild));
    console.log(`build${i} is saved!`)
}
 
 
function setPetal(petalPosition, tier) {
    const petal = document.querySelector(`.common [style*="background-position: ${petalPosition}"].${tier}`);
 
    const longPressEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window,
        buttons: 1,
        button: 0,
    });
    const mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
        buttons: 0,
    });
    petal.dispatchEvent(longPressEvent);
    petal.dispatchEvent(mouseUpEvent);
}
 
function closeInventory() {
    const closeBtn = document.querySelector(".dialog.inventory .btn.close-btn");
 
    const clickEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    closeBtn.dispatchEvent(clickEvent);
}
 
async function setBuild(i) {
    const savedBuild = JSON.parse(localStorage.getItem(`savedBuild${i}`));
    await removeAllPetals();
    for (let i = 0; i < savedBuild.length; i += 2) {
        setPetal(savedBuild[i], savedBuild[i + 1]);
    }
    await closeInventory();
}
 
document.addEventListener('keydown', (event) => {
    if (chatFocus === false && nameFocus === false) {
        if (event.key === 'q') {
switch (buttonDisplay) {
 
    case 0:
        removeBTN.classList.remove('hidden');
        build1S.classList.remove('hidden');
        build2S.classList.remove('hidden');
        build3S.classList.remove('hidden');
        build4S.classList.remove('hidden');
        build5S.classList.remove('hidden');
        buttonDisplay = 1;
        break;
    case 1:
        build1S.classList.add('hidden');
        build2S.classList.add('hidden');
        build3S.classList.add('hidden');
        build4S.classList.add('hidden');
        build5S.classList.add('hidden');
        build1L.classList.remove('hidden');
        build2L.classList.remove('hidden');
        build3L.classList.remove('hidden');
        build4L.classList.remove('hidden');
        build5L.classList.remove('hidden');
        buttonDisplay = 2;
        break;
    case 2:
        removeBTN.classList.add('hidden');
        build1L.classList.add('hidden');
        build2L.classList.add('hidden');
        build3L.classList.add('hidden');
        build4L.classList.add('hidden');
        build5L.classList.add('hidden');
        buttonDisplay = 0;
        break;
 
}
        }
    }
});
