const imageOut = document.querySelector('.image-out');
const flowerName = document.querySelector('.name');
const flowerSort = document.querySelector('.sort');
const flowerCategory = document.querySelector('.category');
const flowerPrice = document.querySelector('.value');

const addOut = document.querySelector('.add-out');
const addImageOut = document.querySelector('.add-image-out');
const totalSum = document.getElementById('sum');

let orderSum = 0;
document.getElementById('total-out').innerHTML = 'Total: ' + orderSum + ' Euro'; // обновление общей суммы заказа

/*
// вывод изображений цветов по типу оказии
    document.querySelector('form').onclick = function(event) {
            for (let key in images) {
                if (event.target.value == images[key]['category']){
                    let img = document.createElement('img');
                    img.setAttribute('data-key', key);
                    img.src = 'assets/images/' + key + '.png';
                    imageOut.append(img);
            }     
        }
    }
*/

// функция вывода изображений цветов по типу оказии
function getOccasion(event) {
    imageOut.innerHTML = '';
    addOut.innerHTML = '';
    addImageOut.innerHTML = '';
    document.getElementById('misc').checked = ''; // снятие галочки checkbox
    flowerName.innerHTML = '';
    flowerSort.innerHTML = '';
    flowerPrice.innerHTML = '';
    orderSum = 0;
    document.getElementById('total-out').innerHTML = 'Total: ' + orderSum + ' Euro'; // обновление общей суммы заказа

        for (let key in images) {
            if (event.target.value == images[key]['category']){
                let img = document.createElement('img');
                img.setAttribute('data-key', key);
                img.src = 'assets/images/' + key + '.png';
                imageOut.append(img);
            }
        }  
    }

imageOut.addEventListener('click', showInfo); // вывод инфо по каждому цветку
addOut.addEventListener('click', showAdd); // вывод оформления по клику checkbox

/*
// вывод общей суммы заказа
totalSum.addEventListener('click', () => {
    document.getElementById('total-out').innerHTML = 'Total: ' + orderSum + ' Euro'; // обновление общей суммы заказа
    console.log(orderSum);
})
*/

// функция вывода доп оформления по клику checkbox
function showAdd(event){
    let a = document.getElementById('misc');

    if (a.checked){
        for (let key in dodatki) {
            let img = document.createElement('img');
            img.setAttribute('data-key', key);
            img.src = 'assets/images/' + key + '.png';
            addImageOut.append(img);
        }
        addImageOut.addEventListener('click', pickAddImage); // выбор оформления    
    } else {
        document.getElementById('add-image-out').innerHTML = '';
    }
}

// выбор/снятие выбора картинки доп опций
function pickAddImage(event){
    const key = event.target.dataset['key'];
    const value = dodatki[key]['value'];  // цена выбранного оформления
    console.log(value);
    if (key === undefined){
        return false;
    }
    if (event.target.classList == 'active') {
        event.target.classList.remove('active');
        orderSum -= value;
        document.getElementById('total-out').innerHTML = 'Total: ' + orderSum + ' Euro'; // обновление общей суммы заказа
    } else {
        event.target.classList.add('active');
        orderSum += value;
        document.getElementById('total-out').innerHTML = 'Total: ' + orderSum + ' Euro'; // обновление общей суммы заказа
    }
    console.log(orderSum);
}

//  вывод инфо по каждому цветку
function showInfo(event){
    orderSum = 0;

    const key = event.target.dataset['key'];
    const value = images[key]['value'];  // цена выбранного букета
    document.getElementById('add-image-out').innerHTML = ''; // очищение поля вывода оформления при выборе другого букета
    document.getElementById('misc').checked = ''; // снятие галочки checkbox

    if (key === undefined){
        return false;
    }
    flowerName.innerHTML = images[key]['name'];
    flowerSort.innerHTML = images[key]['sort'];
    //flowerCategory.innerHTML = images[key]['category'];
    flowerPrice.innerHTML = images[key]['value'] + ' Euro';

    document.querySelectorAll('.image-out img').forEach(item => item.classList.remove ('active'));

    event.target.classList.add('active');
    orderSum += value;
    document.getElementById('total-out').innerHTML = 'Total: ' + orderSum + ' Euro'; // обновление общей суммы заказа
}