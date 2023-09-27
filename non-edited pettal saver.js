let toggleBTN = document.createElement('div');
toggleBTN.classList.add("btn");
toggleBTN.style.backgroundColor = "#BBBBBB";
toggleBTN.textContent = "Toggle";
toggleBTN.addEventListener('click', () => { toggleButton() });
toggleBTN.addEventListener('touchstart', () => { toggleButton() });
document.querySelector(".btn.shop-btn").before(toggleBTN);
 
// remove button
let removeBTN = document.createElement('div');
removeBTN.classList.add("btn");
removeBTN.style.backgroundColor = "tomato";
removeBTN.textContent = "Clear Row";
removeBTN.addEventListener('click', () => { removePrimaryPetals() });
removeBTN.addEventListener('touchstart', () => { removePrimaryPetals() });
document.querySelector(".btn.shop-btn").before(removeBTN);
 
 
// save button
let build1S = document.createElement('div');
build1S.classList.add("btn", "s1", "hidden");
build1S.textContent = "Save 1";
build1S.addEventListener('click', () => { saveBuild(1) });
build1S.addEventListener('touchstart', () => { saveBuild(1) });
document.querySelector(".btn.shop-btn").before(build1S);
 
let build2S = document.createElement('div');
build2S.classList.add("btn", "s2", "hidden");
build2S.textContent = "Save 2";
build2S.addEventListener('click', () => { saveBuild(2) });
build2S.addEventListener('touchstart', () => { saveBuild(2) });
document.querySelector(".btn.shop-btn").before(build2S);
 
let build3S = document.createElement('div');
build3S.classList.add("btn", "s3", "hidden");
build3S.textContent = "Save 3";
build3S.addEventListener('click', () => { saveBuild(3) });
build3S.addEventListener('touchstart', () => { saveBuild(3) });
document.querySelector(".btn.shop-btn").before(build3S);
 
let build4S = document.createElement('div');
build4S.classList.add("btn", "s4", "hidden");
build4S.textContent = "Save 4";
build4S.addEventListener('click', () => { saveBuild(4) });
build4S.addEventListener('touchstart', () => { saveBuild(4) });
document.querySelector(".btn.shop-btn").before(build4S);
 
let build5S = document.createElement('div');
build5S.classList.add("btn", "s5", "hidden");
build5S.textContent = "Save 5";
build5S.addEventListener('click', () => { saveBuild(5) });
build5S.addEventListener('touchstart', () => { saveBuild(5) });
document.querySelector(".btn.shop-btn").before(build5S);
 
 
// load button
let build1L = document.createElement('div');
build1L.classList.add("btn");
build1L.textContent = "DPS";
build1L.addEventListener('click', () => { setBuild(1) });
build1L.addEventListener('touchstart', () => { setBuild(1) });
document.querySelector(".btn.shop-btn").before(build1L);
 
let build2L = document.createElement('div');
build2L.classList.add("btn");
build2L.textContent = "Rice";
build2L.addEventListener('click', () => { setBuild(2) });
build2L.addEventListener('touchstart', () => { setBuild(2) });
document.querySelector(".btn.shop-btn").before(build2L);
 
let build3L = document.createElement('div');
build3L.classList.add("Salt");
build3L.textContent = "L3";
build3L.addEventListener('click', () => { setBuild(3) });
build3L.addEventListener('touchstart', () => { setBuild(3) });
document.querySelector(".btn.shop-btn").before(build3L);
 
let build4L = document.createElement('div');
build4L.classList.add("Waves");
build4L.textContent = "L4";
build4L.addEventListener('click', () => { setBuild(4) });
build4L.addEventListener('touchstart', () => { setBuild(4) });
document.querySelector(".btn.shop-btn").before(build4L);
 
let build5L = document.createElement('div');
build5L.classList.add("Summon");
build5L.textContent = "L5";
build5L.addEventListener('click', () => { setBuild(5) });
build5L.addEventListener('touchstart', () => { setBuild(5) });
document.querySelector(".btn.shop-btn").before(build5L);
 
 
 
 
 
 
 
const styleHidden = document.createElement('style');
styleHidden.innerHTML = ".hidden { display: none !important; } ";
document.body.appendChild(styleHidden);
 
const input = document.querySelector('.chat-input');
const inputName = document.querySelector('.grid .nickname');
let chatFocus = false;
let nameFocus = false;
let mouseMoved = false;
 
 
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
    if (document.querySelector(`.s${i}`).textContent !== "Saved!") {
        const oldText = document.querySelector(`.s${i}`).textContent.toString();
        document.querySelector(`.s${i}`).textContent = "Saved!";
        setTimeout(()=>{ document.querySelector(`.s${i}`).textContent = oldText; }, 1000);
    }
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

const buttonStyle = `
 display: block;
  margin: 0.5px 0;
  width: auto;
  height: auto;
  padding: 0px 0px; // Adjust the padding as needed
  font-size: 12px; // Adjust the font size as needed
  position: absolute;
`;

toggleBTN.style.csstext = buttonStyle;
removeBTN.style.cssText = buttonStyle;
build1S.style.cssText = buttonStyle;
build2S.style.cssText = buttonStyle;
build3S.style.cssText = buttonStyle;
build4S.style.cssText = buttonStyle;
build5S.style.cssText = buttonStyle;
build1L.style.cssText = buttonStyle;
build2L.style.cssText = buttonStyle;
build3L.style.cssText = buttonStyle;
build4L.style.cssText = buttonStyle;
build5L.style.cssText = buttonStyle;


function toggleButton() {
    build1S.classList.toggle('hidden');
    build2S.classList.toggle('hidden');
    build3S.classList.toggle('hidden');
    build4S.classList.toggle('hidden');
    build5S.classList.toggle('hidden');
    build1L.classList.toggle('hidden');
    build2L.classList.toggle('hidden');
    build3L.classList.toggle('hidden');
    build4L.classList.toggle('hidden');
    build5L.classList.toggle('hidden');
}
