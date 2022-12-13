fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(json => populateTable(json))

//
const populateTable = response => {
    if (response.length > 0){
        let temp = "";
        response.forEach(element => {
            temp += "<tr>";
            temp += "<td>" + element.id + "</td>";
            temp += "<td>" + element.name + "</td>";
            temp += "<td>" + element.username + "</td>";
            temp += "<td>" + element.email + "</td>";
            temp += "<td>" + `${element.address.street}, ${element.address.city}` + "</td>";
            temp += "<td>" + element.phone + "</td>";
        });
        setTimeout(() => { console.log("World!"); }, 50000);
        document.getElementById('data').innerHTML = temp;
    }
    cleanUp();
    //postData();
}

const cleanUp = () => {
    let container = document.getElementById('container');
    container.style.display = 'flex'; 
}



const postData = event => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': name,
            'surname': surname
        })       
    })
    .then(response => response.json())
    .then(json => console.log(json))
}


