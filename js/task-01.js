const arrayOfCategories = document.querySelectorAll('.item');

const counterCategories = array => console.log(`У списку ${array.length} категорії`);

counterCategories(arrayOfCategories);

const listOfCategories = array => {

    array.forEach(element => {
        const elementTitle = element.querySelector('h2');
        const elementOfListInItem = element.querySelectorAll('li');
        return console.log(`Категорія: ${elementTitle.textContent} 
Кількість елементів: ${elementOfListInItem.length}`);
    });
};

listOfCategories(arrayOfCategories);


