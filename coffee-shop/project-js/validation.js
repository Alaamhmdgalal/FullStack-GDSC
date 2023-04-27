const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate_email = () => {
    const $submit = $('#submit');
    const email = $('#email').val();
    $submit.text('');

    if (validateEmail(email)) {
        $submit.text(email + ' is valid.');
        $submit.css('color', 'green');
    } else {
        $submit.text(email + ' is invalid.');
        $submit.css('color', 'red');
    }
    return false;
}

$('#email').on('input', validate_email);

const validateTelephone = (tel) => {
    return tel.match(
        /^\d{11}$/
    );
};

const validate_telephone = () => {
    const $submit = $('#submit');
    const tel = $('#tel').val();
    $submit.text('');

    if (validateTelephone(tel)) {
        $submit.text(tel + ' is valid.');
        $submit.css('color', 'green');
    } else {
        $submit.text(tel + ' is invalid.');
        $submit.css('color', 'red');
    }
    return false;
}

$('#tel').on('input', validate_telephone);

// function phonenumber(tel) {
//     var phoneno = /^\d{11}$/;
//     const tel = $('#tel').val();
//     if ((tel.value.match(phoneno))) {
//         return true;
//     }
//     else {
//         alert("message");
//         return false;
//     }
// }
