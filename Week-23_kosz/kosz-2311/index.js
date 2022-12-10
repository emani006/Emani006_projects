let json = `[{
    
    "name": "Букет красных и кремовых роз с зеленым декором",
    "photo": "././assets/images/1.webp",
    "price": "30",
    "description": "Розы красные, розы кремовые, листья зелени",
    "category": "bouquet" 
},
    
    
{
    "name": "Букет из оранжевых роз и кактусов с бутонами лилий",
    "photo": "././assets/images/beautiful-flower-bouquets-85.jpg",
    "price": "35",
    "description": "Нежно-оранжевые розы, мини-кактусы с мягкими иголками, зелень",
    "category": "bouquet" 
},
{  
    "name": "Розы белых и пастельных оттенков",
    "photo": "././assets/images/18.webp",
    "price": "5",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 
},
{
   
    "name": "Букет из малиновых роз и орхидей",
    "photo": "././assets/images/14.webp",
    "price": "40",
    "description": "Композиция гербер, роз, лилий и белых ....",
    "category": "bouquet" 
},
{  
    "name": "Розы белого цвета с сине-фиолетовым декором",
    "photo": "././assets/images/19.webp",
    "price": "10",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 
},
{  
    "name": "Крупные розы нежных цветов",
    "photo": "././assets/images/20.webp",
    "price": "15",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 
},
{  
    "name": "Букет из роз, гвоздик, пионов и веток акации",
    "photo": "././assets/images/2.webp",
    "price": "35",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 
},
{  
    "name": "Плетеная корзина крупных алых роз",
    "photo": "././assets/images/13.jpeg",
    "price": "45",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Корзина хризантем, роз и зеленых веточек",
    "photo": "././assets/images/21.webp",
    "price": "40",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Корзина цветов для велосипеда",
    "photo": "././assets/images/3.jpeg",
    "price": "35",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Нежный букет из роз и анемонов",
    "photo": "././assets/images/6.webp",
    "price": "50",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 
},
{  
    "name": "Корзина малиновых роз и белых орхидей",
    "photo": "././assets/images/22.webp",
    "price": "55",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Розы кремовых и розовых оттенков",
    "photo": "././assets/images/17.webp",
    "price": "15",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 
},
{  
    "name": "Букет из пионов и астр, декорированный листьями",
    "photo": "././assets/images/5.webp",
    "price": "25",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 
},
{  
    "name": "Корзина с полевыми ромашками",
    "photo": "././assets/images/8.webp",
    "price": "30",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Корзина мини-подсолнухов и зеленых веточек",
    "photo": "././assets/images/9.jpeg",
    "price": "20",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Розы нежного розово-молочного цвета",
    "photo": "././assets/images/16.webp",
    "price": "5",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 
},
{  
    "name": "Корзина белых и фиолетовых цветов",
    "photo": "././assets/images/11.jpeg",
    "price": "30",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Корзина розовых орхидей и мини-роз ",
    "photo": "././assets/images/23.webp",
    "price": "55",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},
{  
    "name": "Розы насыщенного красного цвета",
    "photo": "././assets/images/15.webp",
    "price": "10",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses"
}
]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let flowers = JSON.parse(json); 
    console.log(flowers);

    let flowersContent = "";
    
    for (let flower of flowers) {
      
        flowersContent +=`<div class="flowers_card ${flower.category}">
        <div class="flowers_photo_container">
        <img class="flowers_photo" src="${flower.photo}"/>
        </div>
        <div class="flowers_name_container">
        <h3 class="flower_name">${flower.name}</h3>
        </div>
        <div class="flowers_describe_container">
        <div class="flower_price"><span style = "color: #0093a2; font-size: 20px; font-weight:bold;"> 
        Стоимость: </span> ${flower.price}$</div>
        <div class="flower_description">${flower.description}</div>
        <div><span style = "color: white"> <span > Категория: </span>${flower.category}</div>
        </div>
        <br>
        <div class="button_basket_container">
        <button data-catalog class="button_basket">Добавить в корзину</button>
        </div>
    
        <br>
        <br>
        </div>`; 

        document.getElementById("flowersContainer").innerHTML = flowersContent;
    }
//получаем доступ к дата-фильтрам
const buttons = document.querySelectorAll('.button_')
buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
      
        const currentCategory = button.dataset.filter
        console.log(currentCategory);

        const cards = document.querySelectorAll('.flowers_card')
        console.log(cards);

        filter(currentCategory, cards)
    }

)
}) 
//делаем функцию, которая проверит, какую кнопку нажали. 
//Затем пробежит по карточкам и поищет карточки с той же категорией.
//когда функция найдет карточки с той же категорией, она их оставит. Остальные карточки - скроет

function filter (category, items) {
items.forEach((item) => {
    const isItemFiltered = !item.classList.contains(category)
    const isShowAll = category.toLowerCase() === 'all-flowers'
    if(isItemFiltered && !isShowAll) {
        item.classList.add('hide')
    }
    else {item.classList.remove('hide')}
})}


});


const buttons = document.querySelectorAll('.button_')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("category_name").innerText = button.value; })
    })

//добавляем товары в корзину
let cardsArray = [];

window.addEventListener('click', function(event) {

        //проверяем, что клик был совершен по кнопке в корзину
        if(event.target.hasAttribute('data-catalog')) {
            //console.log('я из корзины!');

        //находим карточку с товаром, внутри которой был совершен клик
            const card = event.target.closest('.flowers_card');
             //console.log(card);

        //собираем данные с этого товара и записываем их в единый объект choiceInfo:
            const cardInfo = {
                title: card.querySelector('.flower_name').innerText,
                price: card.querySelector('.flower_price').innerText,
                imgSrc: card.querySelector('.flowers_photo').getAttribute('src'),
            };

            cardsArray.push(cardInfo);

        // запись выбранных букетов в localStorage
            localStorage.setItem('name', JSON.stringify(cardsArray));
        }
    }) 


/*function app() {
    const buttons = document.querySelectorAll('.button_')
    // когда вписываем в    const cards название класса тренировочных карточек  - код работает
    //const cards = document.querySelectorAll('flowers_card')
    //console.log(cards);
//делаем функцию, которая проверит, какую кнопку нажали. 
//Затем пробежит по карточкам и поищет карточки с той же категорией.
//когда функция найдет карточки с той же категорией, она их оставит. Остальные карточки - скроет
function filter (category, items) {
    items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all-flowers'
        if(isItemFiltered && !isShowAll) {
            item.classList.add('hide')
        }
        else {item.classList.remove('hide')}
    })}
//получаем доступ к дата-фильтрам
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
    //console.log(cards);
            filter(currentCategory, cards)
            //console.log(button.dataset.filter)
            console.log(currentCategory);
        })
    })}
    
    app();*/
   
    
    

    

/*let cart = {
    tovar1: {
        quantity: 5,
        price: 1000
    },
    tovar2: {
        quantity: 0,
        price: 300
    },
    tovar3: {
        quantity: 0,
        price: 1
    }
}
document.onclick = event => {
    // console.log(event.target.classList);
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
        countPrice(cart)
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
        countPrice(cart)
    }
}
// увеличение количества товаров
const plusFunction = id => {
    cart[id].quantity++;
    // calcResult(cart[id].quantity * cart[id].price);
    renderCart();
}
// уменьшение количества товаров
const minusFunction = id => {
    if (cart[id].quantity <= 0) {
        renderCart(id);
        return true;
    }
    cart[id].quantity--;
    renderCart();
}
// сделать кнопку Удалить товары
// удаление товаров из коризины
// const deleteFunction = id => {
//     delete cart[id];
//     renderCart();
// }
const renderCart = () => {
    console.log(cart);
}
renderCart();
// переписать, чтобы количество товаров было неограниченно
let totalPrice = document.querySelector('.total-price');
const countPrice = (objCart) => {
    let result = 0;
    Object.values(objCart).map((tovar) => {
        result += tovar.price * tovar.quantity;
    });
    console.log(result);
    totalPrice.innerHTML = `Итого: ${result}`;
}
console.log(typeof totalPrice.innerHTML);*/
