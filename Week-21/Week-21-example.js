
    let dog =  {
                "breed": "Beagle",
                "size": "large",
                "color": "orange",
                "age": 6
                }

function sendApi(){
    fetch('https://api/localhost/pets/add', {
            method: 'POST',
            body: new FormData(btn)
        })
    .then(response => response.json())
    .then(user => {console.log(dog);})
    .catch(error => console.log(error));
}