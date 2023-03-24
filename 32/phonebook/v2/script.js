var personList = [
    { name: 'Ahmet Ak', phone: '532250' },
    { name: 'ALi Gök', phone: '532250' },
    { name: 'Beren Halı', phone: '532250' },
    { name: 'Cemil Fan', phone: '532250' },
    { name: 'Ceren lak', phone: '532250' },
    { name: 'Emine ALi', phone: '532250' },
    { name: 'Erdem Kal', phone: '532250' },
    { name: 'Fatih İgu', phone: '532250' },
    { name: 'Mert Kalıcı', phone: '532250' },
    { name: 'Mehmet Tuna', phone: '532250' },
    { name: 'Umut Bay', phone: '532250' },
    { name: 'Hesna Melek', phone: '532250' },
    { name: 'Meryem Dİdem', phone: '532250' },
    { name: 'Fatma Ana', phone: '532250' },
    { name: 'Zehra Yeşil', phone: '532250' },
    { name: 'Meltem Yaz', phone: '532250' },

];

var filterText, ul, li, liList, a;

ul = document.getElementById('myUL');
liList = document.getElementsByTagName('li');

//forEach()

personList.forEach(person => {
    // console.log(person.name);

    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    let newNode = document.createTextNode(person.name);
    // let newNode = document.createTextNode(person.name + ' ' +person.phone);
    newA.appendChild(newNode);
    newLi.appendChild(newA);
    ul.appendChild(newLi);


});


function filterNames() {
    // console.log('çalıştı;')

    filterText = document.getElementById('myinput').value.toLowerCase()


    // for (let i = 0; i < liList.length; i++) {
    //     a = liList[i].getElementsByTagName('a')[0];
    //     let txtValue = a.textContent.toLowerCase();
    //     console.log(txtValue);
    //     console.log(filterText);

    //     if (txtValue.indexOf(filterText) > -1) {
    //         liList[i].style.display = '';
    //     } else {
    //         liList[i].style.display = 'none';
    //     }
    // }

    while (liList.length > 0) {
        liList[0].remove();
    }

    personList.map(person => {
        if (person.name.toLowerCase().includes(filterText)) {
            let newLi = document.createElement('li');
            let newA = document.createElement('a');
            let newNode = document.createElement('person.name');
            newA.appendChild(newNode);
            newLi.appendChild(newA);
            ul.appendChild(newLi);
        }
    })
}


