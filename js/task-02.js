

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];


  const ingredientsRef = document.querySelector('#ingredients');

  const makeElemants = array =>{
    const itemArray = array.map(element => {
      const elementLi = document.createElement('li');
      elementLi.textContent = element;
      
      return elementLi;
    });
    return itemArray;
  };

  const addItemsInList = (array, reference, callback) => { reference.append(...callback(array))};

  

 

  addItemsInList(ingredients, ingredientsRef, makeElemants);


  







    
  
