tombolMore = document.querySelector(".readmore");
tombolLess = document.querySelector(".readless");
more = document.querySelector(".kata-more");
arrow = document.querySelector(".fas");
less = document.querySelector(".less");

// less = documen.querySelector(".less");
tombolMore.onclick = function(){
    more.classList.toggle("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMore.classList.toggle("none");
    tombolLess.classList.toggle("yes");
    less.classList.toggle("none");
}

tombolLess.onclick = function(){
    more.classList.remove("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMore.classList.remove("none");
    tombolLess.classList.remove("yes");
    less.classList.remove("none");
}

tombolLessa = document.querySelector(".readless1")
tombolmorea = document.querySelector(".readmore1")
morea = document.querySelector(".kata-more1");
arrowa = document.querySelector(".fas1");
lessa = document.querySelector(".less1");

tombolMorea.onclick = function(){
    morea.classList.toggle("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMorea.classList.toggle("none");
    tombolLessa.classList.toggle("yes");
    lessa.classList.toggle("none");
}

tombolLessa.onclick = function(){
    morea.classList.remove("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMorea.classList.remove("none");
    tombolLessa.classList.remove("yes");
    lessa.classList.remove("none");
}