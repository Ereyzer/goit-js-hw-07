const refs = {
    controlBox: document.querySelector('#controls'),
    input: document.querySelector('#controls input'),
    createBtn: document.querySelector('[data-action="render"]'),
    clearBtn: document.querySelector('[data-action="destroy"]'),
    boxesList: document.querySelector('#boxes'), 
}
const {controlBox, input, createBtn, clearBtn, boxesList} = refs;

createBtn.addEventListener('click', onClickRender);


const renderColor = () => Math.round(Math.random() * (250 - 0) + 0);
const renderRGBColor = (callback) => `rgb(${callback()}, ${callback()}, ${callback()})`;

const createBoxes = (amount) =>{
    const boxes = [];
    for(let i = 0; i < amount; i += 1){
        const box = document.createElement('div');
        const size = i * 10 + 30;
        box.setAttribute('style', `background-color: ${renderRGBColor(renderColor)};
                                    width: ${size}px;
                                    height: ${size}px;`);
        boxes.push(box);
    };
    if(boxes[0]){
     createBtn.removeEventListener('click', onClickRender);
     boxesList.classList.toggle('container-task8');
     clearBtn.addEventListener('click', destroyBoxes);
    };
    return boxes;
};

function addBoxes (reference, callback)  { 
    return reference.append(...callback(Number(input.value)))
};

function onClickRender() {
    return addBoxes(boxesList, createBoxes)
}

function destroyBoxes ()  {
    input.value = '';
    boxesList.innerHTML = '';
    boxesList.classList.toggle('container-task8')
     createBtn.addEventListener('click', onClickRender);
     clearBtn.removeEventListener('click', destroyBoxes);
};











// function destroyBoxes ()  {
//     const itemsInBoxes = boxesList.querySelectorAll('div')
    
//     itemsInBoxes.forEach(el => el.remove());
//     boxesList.classList.toggle('container-task8')
//     return createBtn.addEventListener('click', onClickRender);
// };


















