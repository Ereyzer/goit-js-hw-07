const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryListRef = document.querySelector('.js-gallery');


  const addGalleryItem = function() {
    const itemOfList = document.createElement('li');
    itemOfList.classList.add('gallery__item');
    itemOfList.insertAdjacentHTML('afterbegin',`<img src = ${this.url} class = "gallery__image" alt = '${this.alt}'>`);
    return itemOfList;
  };

 const addGallery = (array, reference) => {
     reference.classList.add('gallery');
    const galleryArray = array.map(element => addGalleryItem.call(element));
    reference.append(...galleryArray);
 };

 addGallery(images, galleryListRef);
