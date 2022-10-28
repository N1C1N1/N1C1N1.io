
function OnSubmit(el) {
    var name = el.name.value;
    var pass = el.password.value;
    var repass = el.repassword.value;
    var fail = '';
    if(name == "" || pass == "" || repass == "") {
        fail = 'Заполните все поля!';
        console.log('none')
    }
    if (name.length < 3){
        fail = 'Имя не может состоять меньше 3 букв'
    }
    if (pass != repass) {
        fail = 'Пароли не совподают'
    }
    if (pass.length < 4) {
        fail = 'Пароль не может быть меньше 4 символов'
    }
    if(pass == 1111 ||pass == 2222 || pass == 1234 || pass == 4321 || pass == 3333 || pass == 1212 || pass == 2121) {
        fail = 'Пароль слишком лёгкий!'
    }
    if (fail == '') {
        return true;
    }
    else {
        alert(fail);
        return false;
    }
}