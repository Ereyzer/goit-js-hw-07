const refs = {
    controlBox: document.querySelector('#controls'),
    input: document.querySelector('#controls input'),
    createBtn: document.querySelector('[data-action="render"]'),
    clearBtn: document.querySelector('[data-action="destroy"]'),
    boxesList: document.querySelector('#boxes'), 
}
const {controlBox, input, createBtn, clearBtn, boxesList} = refs;

const renderColor = () => Math.round(Math.random() * (250 - 0) + 0);
const renderRGBColor = (callback) => `rgb(${callback()}, ${callback()}, ${callback()})`

const createBoxes = (amount) =>{
    const boxes = [];
    for(let i = 0; i < amount; i += 1){
        const box = document.createElement('div');
        box.setAttribute('style', `background-color: ${renderRGBColor(renderColor)};
                                    width: calc(${i} * 10px + 30px);
                                    height: calc(${i} * 10px + 30px);`);
        boxes.push(box);
    }
    boxesList.classList.toggle('container-task8')
    createBtn.removeEventListener('click', onClickRender);
    return boxes;
};

function addBoxes (reference, callback)  { 
    return reference.append(...callback(Number(input.value)))
};

function onClickRender() {
    return addBoxes(boxesList, createBoxes)
}

createBtn.addEventListener('click', onClickRender);

function destroyBoxes ()  {
    const itemsInBoxes = boxesList.querySelectorAll('div')
    
    itemsInBoxes.forEach(el => el.remove());
    boxesList.classList.toggle('container-task8')
    return createBtn.addEventListener('click', onClickRender);
};

clearBtn.addEventListener('click', destroyBoxes);
