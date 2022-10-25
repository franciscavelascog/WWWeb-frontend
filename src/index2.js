const btnSwitch = document.querySelector('#sun_moon');

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    btnSwitch.classList.toggle('active');
}

// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
       
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();

function verificar_reg() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('appellidos').value;
    const usuario = document.getElementById('usuario').value;
    const mail = document.getElementById('mail').value;
    const contraseña = document.getElementById('contraseña').value;
    const ver_contra = document.getElementById('ver_contra').value;
    let alerta = document.getElementById('alerta');

    if (nombres == "" || apellidos == ""){
        alerta.innerHTML = "Alguno de los campos esta vacío, debes completarlos todos";
    }
}

function validarEmail(valor) {
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
	}
	else alert('¡Mensaje enviado correctamente!');
}

function enviarContact() {
    const nombre = document.getElementById('nombreContact').value;
    const mensaje = document.getElementById('mensajeContact').value;
    const email = document.getElementById('emailContact').value;
    if (nombre == "" || mensaje == "" || email == "") {
        alert('Debes completar todos los campos')
    }else {
        validarEmail(email);
    }
}

