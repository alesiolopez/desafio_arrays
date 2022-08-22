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
    constructor(codigo, nombre, precio, categoria, especificaciones,stock){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.especificaciones = especificaciones;
        this.stock = stock;
    }
    listar_productos(){
        for (let i = 0; i < stock_productos.length; i++) {
            console.log("---------LISTANDO PRODUCTO", (i +1) ,"------------");
            console.log("Código: ", stock_productos[i].codigo);
            console.log("Producto: ", stock_productos[i].nombre);
            console.log("Precio: ", stock_productos[i].precio);
            console.log("Categoría: ", stock_productos[i].categoria);
            console.log("Especificaciones: ", stock_productos[i].especificaciones);
            console.log("Stock: ", stock_productos[i].stock);
            console.log("Vuelta nro: ", i);
            console.log("-------------------------")
        }
    }

    /* get_stock(){
        if(this.stock >0){
            document.getElementById("cantidad_carrito").innerHTML = `Hay productos`;
        } else{
            document.getElementById("cantidad_carrito").innerHTML = `No hay stock`;
        }
    } */
}



function agregar_producto_carrito(producto){
    if(stock_productos[producto].stock == 0){
        document.getElementById('cantidad_carrito').innerHTML = `No hay stock.`;
    } else{ // REVISAR: Al agregar el primer producto y que sea el índice igual o mayor a 1, me da un error por consola. No muestra en el html el producto que agregué pero lo suma al array. Al agregar el segundo artículo funciona bien.
        carrito_compras.push(stock_productos[producto]);

        //Trato de listar los productos que agrega al carrito. Al hacer clic en uno y otro se muestra en el label, pero no los agrega uno abajo del otro o a los costados.
        //RESOLVER: que aparezca misma estructura uno abajo del otro.
        for (let i = 0; i <= carrito_compras.length; i++) {
            document.getElementById("cantidad_carrito").innerHTML = `
            Producto: ${carrito_compras[producto].nombre} <br>
            Precio: ${carrito_compras[producto].precio}
            Cantidad de artículos en carrito: ${carrito_compras.length} artículo/s.
            `;
        }
        //Funciona. Podemos ver por consola los productos agregados a carrito_compras.
        console.log("Carrito por consola: ",carrito_compras); 
    }
    
}

//Carga de productos. Instanciando productos. El 4to producto tiene stock = 0 para probar condición if.
stock_productos.push(new Productos(0001,"Samsung Galaxy S22 Ultra", 332000, "Celulares", "Celular Alta Gama",10));
stock_productos.push(new Productos(0002,"Samsung Galaxy S22+", 273000, "Celulares", "Celular Alta Gama",9));
stock_productos.push(new Productos(0003,"Samsung Galaxy S21+", 332000, "Celulares", "Celular Alta Gama",7));
stock_productos.push(new Productos(0004,"Samsung Galaxy S20", 273000, "Celulares", "Celular Alta Gama",0));
//stock_productos.push(new Productos(0005,"Samsung Galaxy S10+", 332000, "Celulares", "Celular Alta Gama",10));
//stock_productos.push(new Productos(0006,"Samsung Galaxy S9+", 273000, "Celulares", "Celular Alta Gama",10));

//Pruebas:
console.log(stock_productos[0].nombre);

console.log("------------------")

console.log(stock_productos[0].stock);

console.log("------------------")

console.log(stock_productos.join(" - ")); //consultar como ver los objetos con Join.

//stock_productos[0].listar_productos(); //Consultar por qué debo agregar el parámetro y por qué si agrego 0 o 1 me muestra igual.


//console.log("Carrito: ",carrito_compras);

//console.log("Carrito agregando otro producto: ",carrito_compras);