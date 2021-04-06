const arrayOfCategories = document.querySelectorAll('.item');

const listOfCategories = array => {
    console.log(`У списку ${array.length} категорії`);
    array.forEach(element => {
        const elementTitle = element.querySelector('h2');
        const elementOfListInItem = element.querySelectorAll('li');
        return console.log(`Категорія: ${elementTitle.textContent}`),
        console.log(`Кількість елементів: ${elementOfListInItem.length}`);
    });
};

listOfCategories(arrayOfCategories);


