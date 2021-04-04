const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const ingredientsRef = document.querySelector('#ingredients');


  const createIngredient = ingredients.map(element => {
    const elementLi = document.createElement('li');
    elementLi.textContent = element;
    
    return elementLi;
  });

  ingredientsRef.append(...createIngredient)







    
  
