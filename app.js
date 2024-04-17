let userName=prompt("Adinizi daxil edin");
let userSurname=prompt("Soyadinizi daxil edin");
let userYear=prompt("Cari teqvim ilini daxil edin");
let userDate=prompt("Tevellüdünüzü daxil edin");


function person(name,surname){
    console.log(name + "   " + surname + "   " + date(userYear , userDate) + "yaş");
    date(userYear, userDate);
}
function date(x,y){
    return userYear - userDate;
}
person(userName, userSurname);
