const inputRef = document.querySelector('#validation-input');

const addClassOnInput = () => inputRef.classList.add(inputRef.value.length === 6 ? 'valid' : 'invalid');

const onInputBlur = () => {
    inputRef.classList.remove(inputRef.classList.contains('invalid') ? 'invalid' : 'valid');
    return addClassOnInput();
}

inputRef.addEventListener('blur', onInputBlur);




//!альтернативне рішеня


// const addClass = value => inputRef.classList.add(value);
// const replaceClass = (curentValue, newValue) => inputRef.classList.replace(curentValue, newValue)

// const addClassOnInput = () => {
//     if(inputRef.classList.value){
    
//         if(inputRef.value.length === 6 && inputRef.classList.contains('invalid')){
//             replaceClass('invalid', 'valid')
//         }else if(inputRef.value.length !== 6 && inputRef.classList.contains('valid')){
//             replaceClass('valid', 'invalid')
//         }
        
//     }else{
//         if(inputRef.value.length === 6){
//             addClass('valid')
//         }else{
//             addClass('invalid')
//         }
//     }
// };

// inputRef.addEventListener('blur', addClassOnInput)