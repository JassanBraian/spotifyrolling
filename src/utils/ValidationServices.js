class ValidationServices {

    validarNoEmpty = input => input.value ? true : false;

    validarString = (input, longMin) => {
        !longMin ? longMin = 1 : true;
        if(input.value.length >= longMin) return true;
        else return false;
    }

    validarUrl = input => {
        const regEx = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/;
        regEx.test(input.value) ? true : false;
    }

    validarSelectBoolean = input => (input.value === 'true' && input.value === 'false') ? true : false;

    validarEmail = input => {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
        regEx.test(input.value) ? true : false;
    }

}

export default ValidationServices;