const ref = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

ref.input.addEventListener('input', () => ref.span.setAttribute('style', `font-size: ${Number(ref.input.value) + 10}px`));
 

