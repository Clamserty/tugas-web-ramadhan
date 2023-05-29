tombolLessa = document.querySelector(".readless1")
tombolMorea = document.querySelector(".readmore1")
morea = document.querySelector(".kata-more1");
arrowa = document.querySelector(".fas1");
lessa = document.querySelector(".less1");

tombolMorea.onclick = function(){
    morea.classList.add("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.add('fa-angle-up');
    tombolMorea.classList.add("none");
    tombolLessa.classList.add("yes");
    lessa.classList.add("none");
}

tombolLessa.onclick = function(){
    morea.classList.remove("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMorea.classList.remove("none");
    tombolLessa.classList.remove("yes");
    lessa.classList.remove("none");
}