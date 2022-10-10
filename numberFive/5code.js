<script>
function raschitat() {
cena  = document.getElementById('cena').value;
kolvo  = document.getElementById('kolvo').value;
if(cena == ""){
alert("Вы не указали ширину");
} else if(kolvo == ""){
alert("Вы не указали длину");
} else {
stoimost = parseFloat (cena)* parseFloat (kolvo);
document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
}
}
</script>
