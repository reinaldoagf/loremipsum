function isValidEmail(mail) { 
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
}
$("#login-form").submit(function(evt){
    evt.preventDefault();
    if (!isValidEmail($("#emaillogin").val())) {
		$.notify("Ingrese una dirección de correo válida", "error");		
	}
});
$("#send-form").submit(function(evt){
    evt.preventDefault();
    if (!isValidEmail($("#email").val())) {
		$.notify("Ingrese una dirección de correo válida", "error");		
	}
});