const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}
const {input, span} = refs;

input.addEventListener('input', () => onSpanChangeContent(input.value));

const onSpanChangeContent = (newText) => newText === '' ? span.textContent = 'незнайомець' : span.textContent = newText; 
