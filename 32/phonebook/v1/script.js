function filterNames() {
    // console.log('çalıştı;')

    var filterText, ul, li, liList, txtValue, a;
    filterText = document.getElementById('myinput').value.toLowerCase()
    ul = document.getElementById('myUL');
    liList = document.getElementsByTagName('li');

    for (let i = 0; i < liList.length; i++) {
        a = liList[i].getElementsByTagName('a')[0];
        let txtValue = a.textContent.toLowerCase();
        console.log(txtValue);
        console.log(filterText);

        // console.log(txtValue.indexof(filterText));

        if (txtValue.indexOf(filterText) > -1) {
            liList[i].style.display = '';
        } else {
            liList[i].style.display = 'none';
        }
    }
}