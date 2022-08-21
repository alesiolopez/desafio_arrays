//////////////////////////////////////////////////////////
///////////// PROGRAMACION DE LOGIN SIMPLE ///////////////
//////////////////////////////////////////////////////////
function Login() {
    alert("Validando usuario y contraseña");
    let usuario_entrada = document.getElementById("usuarioEntrada").value;
    let password_entrada = document.getElementById("passwordEntrada").value;
    if(usuario_entrada == "usuario" && password_entrada == "password"){
        window.location="index.html";
        alert("Ingreso correcto.");
    } else if (usuario_entrada == "alesiolopez" && password_entrada == "alesiolopez"){
        window.location="index.html";
        alert("Bienvenido desarrollador.");
    } else {
        alert("Usuario y contraseña incorrectos, por favor introducir nuevamente.");
    }
}


let total = 0;
let stock_productos = [];
let carrito_compras = [];

class Productos{
    constructor(codigo, nombre, precio, categoria, especificaciones){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.especificaciones = especificaciones;
    }
    listar_productos(){
        for (let i = 0; i < stock_productos.length; i++) {
            console.log("---------------------");
            console.log("Producto: ", stock_productos[i].codigo);
            console.log("Producto: ", stock_productos[i].nombre);
            console.log("Precio: ", stock_productos[i].precio);
            console.log("Categoría: ", stock_productos[i].categoria);
            console.log("Especificaciones: ", stock_productos[i].especificaciones);
            console.log("Vuelta nro: ", i);
        }
    }

    get_stock(){
        if(this.stock >0){
            document.getElementById("cantidad_carrito").innerHTML = `Hay productos`;
        } else{
            document.getElementById("cantidad_carrito").innerHTML = `No hay stock`;
        }
    }
}



function agregar_producto_carrito(producto){
    if(stock_productos[producto] == undefined){
        document.getElementById('cantidad_carrito').innerHTML = `No hay stock`
    } else{
        carrito_compras.push(stock_productos[producto]);
        //document.getElementById("cantidad_carrito").innerHTML = `${carrito_compras.length} artículo/s.`;
        for (let i = 0; i < cantidad_carrito.length; i++) {
            document.getElementById("cantidad_carrito").innerHTML = `Producto: ${carrito_compras[i]}`;
        }
        console.log("Carrito: ",carrito_compras);
    }
    
}

//Cargo productos. Instanciando.
stock_productos.push(new Productos(0001,"Samsung Galaxy S22 Ultra", 332000, "Celulares", "Celular Alta Gama"));
stock_productos.push(new Productos(0002,"Samsung Galaxy S22+", 273000, "Celulares", "Celular Alta Gama"));
stock_productos.push(new Productos(0003,"Samsung Galaxy S21+", 332000, "Celulares", "Celular Alta Gama"));
stock_productos.push(new Productos(0004,"Samsung Galaxy S20", 273000, "Celulares", "Celular Alta Gama"));
stock_productos.push(new Productos(0005,"Samsung Galaxy S10+", 332000, "Celulares", "Celular Alta Gama"));
stock_productos.push(new Productos(0006,"Samsung Galaxy S9+", 273000, "Celulares", "Celular Alta Gama"));

console.log(stock_productos);

console.log(stock_productos.join(" - ")); //consultar como ver los objetos con Join.

stock_productos[0].listar_productos(); //Consultar por qué debo agregar el parámetro y por qué si agrego 0 o 1 me muestra igual.

//let index = 0;
//carrito_compras.push(stock_productos[index]);


console.log("Carrito: ",carrito_compras);

//console.log("Carrito agregando otro producto: ",carrito_compras);