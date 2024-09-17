let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let boton_limpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar(){

    let numeroIngresado = parseInt (cantidad.value);
    let password = '';

    if(cantidad.value == ''){
        
        alert('Por favor, ingrese un número válido.');
        
    } else if(numeroIngresado < 6){
        
        alert('La cantidad de caracteres debe ser mayor que 6.');

    }else if(numeroIngresado > 15){

        alert('La cantidad de caracteres debe ser menor que 15.');

    }else{
        
        for(let i=0; i < numeroIngresado; i++){
        
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);
    
            password += caracterAleatorio;
    
        }
        contrasena.value = password;
        validarClave(password);
    }

}

function validarClave(){

    let validarCaracteres = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,15}$/;

    if(contrasena.value.match(validarCaracteres)){

        alert('La contraseña generada es fuerte.');

    }else{
        alert('La contraseña es débil. Debe contener al menos un número, una letra minúscula, una letra mayúscula y un símbolo especial.');
    }
}

function limpiar(){
    contrasena.value = '';
    cantidad.value = '';
}