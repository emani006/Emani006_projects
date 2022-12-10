// переход на страницу каталога при нажатии соответствующей кнопки 
document.getElementById('to-main-page').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// переход на страницу оформления заказа при нажатии соответствующей кнопки 
document.getElementById('to-order-page').addEventListener('click', () => {
    window.location.href = '';
});


const addOut = document.querySelector('.add-out');
const addImageOut = document.querySelector('.add-image-out');
let a = document.getElementById('misc'); // checkbox


let orderSum; // общая стоимость заказа

// извлекаем элементы из localStorage
let cartItems = JSON.parse(localStorage.name);
console.log(cartItems);
console.log(cartItems.length);


if (cartItems.length <1){
    console.log('empty');
} else {
    console.log('full');
}

orderSum = getTotalForItem();
console.log(orderSum);

let item=0;
let decorOptionCost = 0;
let addDecorOption = document.getElementById('add-option-list'); // стоимость упаковки

addDecorOption.onchange = getOptionCost;   // добавление стоимости упаковки к общей стоимости

// функция добавления упаковки
function getOptionCost() {
    orderSum -= decorOptionCost;
    decorOptionCost = +addDecorOption.value;
    orderSum += decorOptionCost;
    document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
};

addOut.addEventListener('click', showAdd); // вывод доп оформления по клику checkbox

// функция вывода доп оформления по клику checkbox
function showAdd(event){
    if (a.checked){
        for (let key in dodatki) {
            let img = document.createElement('img');
            let name = dodatki[key]['name'];  // цена выбранного оформления
            let value = dodatki[key]['value'];  // цена выбранного оформления

            img.setAttribute('data-key', key);
            img.title = name + ': $' + value; // назначение атрибута title
            img.alt = 'Подарок: ' + name + ': ' + value; // назначение атрибута title
            img.src = 'assets/images/' + key + '.png';
            addImageOut.append(img);
            img.after(' ');
        }
        addImageOut.addEventListener('click', pickAddImage); // выбор оформления
        console.log('after add decor' + orderSum);
    } else {
        console.log('Koszt dodatkow' + item);
        console.log('SUM ' + orderSum);
        orderSum -= item;
        item=0;
        document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа

        document.getElementById('add-image-out').innerHTML = '';
        console.log('after delete decor' + orderSum);
    }
}

// выбор/снятие выбора картинки доп опций
function pickAddImage(event){
    let key = event.target.dataset['key'];
    value = dodatki[key]['value'];  // цена выбранного оформления
        if (key === undefined){
            return false;
        }
        if (event.target.classList == 'active') {
            event.target.classList.remove('active');
            item-=value;
            orderSum -= value;
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
        } else {
            event.target.classList.add('active');
            item+=value;
            orderSum += value;
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
        }
}



// цена 1 букета с учетом стоимости букета (без оформления)
function getTotalForItem(){
    let itemCost = getItemPrice();
    document.getElementById('total-out').innerHTML = 'Сумма: $' + itemCost;
    console.log('Цена элемента ' + itemCost);
    return itemCost;
}

// выделяем цену букета из строки
function getItemPrice(){
    let priceString = cartItems[0].price;
    let price = +priceString.substr(11, 2);
    return price;
}

setItemOut(cartItems,0); // вызов функции вывода данных

// выводим в корзину данные букета: название, цена, картинка
function setItemOut(item,i) {
    let itemName = document.createElement('span');
    itemName.innerHTML = `<span class="item-descript">&#10048;&nbsp Название букета: </span>` + cartItems[i].title;
    document.getElementById('item-name').appendChild(itemName);

    let itemPrice = document.createElement('span');
    itemPrice.innerHTML = `<span class="item-descript">&#10048;&nbsp Цена букета: $</span>` + getItemPrice();
    document.getElementById('item-price').appendChild(itemPrice);

    let itemImage = document.createElement('img');
    itemImage.src = cartItems[i].imgSrc;
    itemImage.width=350;

    console.log(itemImage);
    document.getElementById('item-image').appendChild(itemImage);
}


/*
// кнопка удалить букет
    document.getElementById('delete').onclick = deleteItem;
    function deleteItem(){
        document.getElementById('delete-info').innerHTML = 'Хотите удалить букет из корзины?';
    }
*/
