const imageOut = document.querySelector('.image-out');
const flowerName = document.querySelector('.name');
const flowerSort = document.querySelector('.sort');
const flowerCategory = document.querySelector('.category');


for (let key in images) {
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = 'assets/images/' + key + '.png';
    imageOut.append(img);
}

imageOut.addEventListener('click', showInfo);

function showInfo(event){
    //console.dir(event.target);
    const key = event.target.dataset['key'];
    //console.log(key);
    if (key === undefined){
        return false;
    }
    flowerName.textContent = images[key]['name'];
    flowerSort.textContent = images[key]['sort'];
    flowerCategory.textContent = images[key]['category'];

    document.querySelectorAll('.image-out img').forEach(item => item.classList.remove ('active'));

    event.target.classList.add('active');
}