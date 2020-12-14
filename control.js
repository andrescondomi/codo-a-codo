function testBox1(form) {
    Ctrl = form.email;
    if (Ctrl.value == "" || Ctrl.value.indexOf('@', 0) == -1) {
        validatePrompt(Ctrl, "Ingresar un E-mail")
        return (false);
    } else {
        return (true);
    }
}

function clave_vacia(form) {
    Ctrl = form.clave;
    if (Ctrl.value == "") {
        validatePrompt(Ctrl, "Ingresar una clave")
        return (false);
    } else {
        return (true);
    }
}

function runSubmit(form, button) {

    if (!testBox1(form)) return;
    if (!clave_vacia(form)) return;

    alert("Todos los campos OK! Se procede a enviar");

    document.test.submit();

}



function validatePrompt(Ctrl, PromptStr) {

    alert(PromptStr)

    Ctrl.focus();

    return;

}





function loadDoc() {

    // initial focus; use if needed

    document.test.email.focus();

    return;

}

