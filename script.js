let share = document.getElementById("share");
let fofo = document.getElementById("fofo");
let sharePhone = document.getElementById("share-phone11");
let sharePhone1 = document.getElementById("share-phone");
let phone = document.getElementById("phone");
let deco = document.getElementById("dico");   
share.addEventListener('click', toggle);


function toggle (){
    if (fofo.style.display === 'flex'){
        fofo.style.display = 'none';
    }else{
        fofo.style.display = 'flex';
    }
}


function showphone(){
    phone.style.display = 'flex'
}

sharePhone.addEventListener('click' , showphone)

function hide(){
    phone.style.display = 'none'
}
sharePhone1.addEventListener('click' , hide)