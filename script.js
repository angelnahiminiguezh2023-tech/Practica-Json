const contenedor = document.getElementById("contenedor-productos")

fetch("products.json")
.then(response => response.json())
.then(datos => {
    datos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.id = producto.id
        div.innerHTML=`
        <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3> 
        <p>precio:$${producto.precio}</p>
        <button onclick="eliminar(${producto.id})" >Eliminar</button>
        `;
        contenedor.appendChild(div);
    });
})
.catch(error => console.log("Error de carga en el json"));

function eliminar(id){
  document.getElementById(id).remove()
}
function agregarProducto() {
 
}