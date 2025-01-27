function addminers(){
    var popup = document.getElementById("addminer")
    var backdrop = document.getElementById('backdrop');

    popup.style.display = 'flex';
    backdrop.style.display = 'block';

}

function closePopup(){
    var popup = document.getElementById("addminer")
    var backdrop = document.getElementById('backdrop');

    popup.style.display = 'none';
    backdrop.style.display = 'none';
    console.log('na you no kno work')

}
function displayProfile(){
    var profile = document.getElementById('userlist2')
    var list = document.getElementById('userlist')
    var arrow = document.getElementById('back')
    var analytics = document.getElementById('analytics')


    profile.style.display="flex";
    list.style.display='none'
    arrow.style.display= 'flex'
    analytics.style.display = 'none'
}


function hideProfile(){
    var profile = document.getElementById('userlist2')
    var list = document.getElementById('userlist')
    var arrow = document.getElementById('back')


    profile.style.display="none";
    list.style.display='flex'
    arrow.style.display= 'none'
    analytics.style.display = 'flex'
}
