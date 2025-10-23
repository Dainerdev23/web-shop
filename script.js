const tienda = [
    {nombre:"Pizza", precio: 2000,},
    {nombre:"Empanada", precio: 4000,},
    {nombre:"CocaCola", precio: 4000,}
    
];

let carrito = [];


const total = document.getElementById("cartTotal")
const carritoContenedor = document.getElementById("carroCompra")

function actualizarCarrito () {
    carritoContenedor.innerHTML = ""

    carrito.forEach((item, indice) =>{

    const itemContenedor = document.createElement("div")
    itemContenedor.classList.add("producto");
    carritoContenedor.appendChild(itemContenedor);

    const elements = document.createElement("div")
    elements.classList.add("elementList");
    itemContenedor.appendChild(elements)

    const itemNombre = document.createElement("span") 
    itemNombre.textContent = "("+ item.cantidad +") " + item.nombre
    elements.appendChild(itemNombre)

    const itemPrecio = document.createElement("span");
    itemPrecio.textContent = " " + item.precio + "$";
    elements.appendChild(itemPrecio);


    const itemButton = document.createElement("delete");
    itemButton.textContent = "❎";
    itemButton.classList.add("btnDelete");
    itemContenedor.appendChild(itemButton);

    itemButton.addEventListener("click", () =>{
        if(item.cantidad > 1){
            item.cantidad -= 1;
        }else{
            carrito.splice(indice, 1);

        }
        actualizarCarrito();

    })

    })
    
     

    let totalGlobal = 0;
    carrito.forEach((item) => {
        totalGlobal += item.precio * item.cantidad;
    });

    total.textContent = totalGlobal + "$"; 
    





}



const tiendaContenedor = document.getElementById("shop");

tienda.forEach((item) =>{
    console.log("elemento: ", item);
    
    const itemContenedor = document.createElement("div")
    itemContenedor.classList.add("producto");
    tiendaContenedor.appendChild(itemContenedor);

    const elements = document.createElement("div")
    elements.classList.add("elementList");
    itemContenedor.appendChild(elements)

    const itemNombre = document.createElement("span")
    itemNombre.textContent = item.nombre
    elements.appendChild(itemNombre)

    const itemPrecio = document.createElement("span");
    itemPrecio.textContent = " " + item.precio + "$";
    elements.appendChild(itemPrecio);


    const itemButton = document.createElement("button");
    itemButton.textContent = "🛒";
    itemButton.classList.add("btnAgregar");
    itemContenedor.appendChild(itemButton);


    itemButton.addEventListener("click", () =>{

        const existe = carrito.find(
            //elemento => elemento.nombre == item.nombre)
            (elemento) =>{
                return elemento.nombre == item.nombre
        })

        if (existe !== undefined){
            existe.cantidad = existe.cantidad+1
            
        }else {
            carrito.push({
                nombre: item.nombre,
                precio: item.precio,
                cantidad: 1
            });   
        }
        // console.log("existe",existe);
        // console.log(carrito);
        actualizarCarrito()
    })
})




