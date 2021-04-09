const ref = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

ref.input.addEventListener('input', () => ref.span.style.fontSize = `${Number(ref.input.value) + 10}px`);

 

// ref.span.setAttribute('style', `font-size: ${Number(ref.input.value) + 10}px`);