let tovar = document.getElementById('tovar');
var typeWool = document.getElementById('typeWool');
var typeTools = document.getElementById('typeTools');

tovar.addEventListener("change", function() {
    let tovarValue = tovar.value;
    switch(tovarValue) {
        case "dimond":
            typeWool.style.display='none';
            typeTools.style.display='none';
            break
        case "wool":
            typeWool.style.display='block';
            typeTools.style.display='none';
            break
        case "tools":
            typeWool.style.display='none';
            typeTools.style.display='block';
            break
    }
});

function raschitat() {
    cena  = document.getElementById('cena').value;
    kolvo  = document.getElementById('kolvo').value;
    if(cena == ""){
        alert("Вы не указали цену");
    } else if(kolvo == ""){
        alert("Вы не указали кол-во");
    } else {
        stoimost = parseFloat (cena)* parseFloat (kolvo);
        document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
    }
}
