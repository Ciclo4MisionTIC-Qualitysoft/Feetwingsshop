import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { BsFillCartPlusFill } from "react-icons/bs";
import productos from "../data/productos.json";
import { traerPorId } from "../utils/Catalogo";

function BotonAddCar({ idProducto, cantidad }) {
  useEffect(() => {
    traerPorId(idProducto).then(data => {
      setproducto(data);
    })
  }, [])
  
const [producto, setproducto] = useState({})
const [carrito, setcarrito] = useState(JSON.parse(localStorage.getItem("carrito")))

  const guardarEnCarrito = async () => {
    const newData = await {
      idProducto:producto._id,
      nombre:producto.nombre,
      precio:producto.precio,
      imagen:producto.imagen,
      cantidad:cantidad
    }
    console.log(newData);
    if (carrito !== null) {
      let olData = carrito
      olData.push(newData)
      localStorage.setItem("carrito", JSON.stringify(olData));
      
    }else{
      localStorage.setItem("carrito", JSON.stringify([newData]));
    }

  }


  return (
    <div>
      <Button
        onClick={() => {
          guardarEnCarrito();
        }}
        variant="outline-primary"
      >
        Añadir al Carrito <BsFillCartPlusFill />
      </Button>{" "}
    </div>
  );
}
export default BotonAddCar;
/*


function BotonAddCar({
  idProducto,
  nombre,
  precio,
  imagen,
  cantidad,
  dataCarrito,
}) {
  const [dataCar, setdataCar] = useState(dataCarrito);
  const [dataAdd, setdataAdd] = useState({
    idProducto: idProducto,
    nombre: nombre,
    precio: precio,
    imagen: imagen,
    cantidad: cantidad,
  });

  const guardarEnCarrito = async () => {
    console.log(dataCar);
    const newData = dataCar;
    newData.push(dataAdd);
    localStorage.setItem("carrito", JSON.stringify(newData));
  };

  return (
    <div>
      <Button
        onClick={() => {
          guardarEnCarrito();
        }}
        variant="outline-primary"
      >
        Añadir al Carrito <BsFillCartPlusFill />
      </Button>{" "}
    </div>
  );
}

export default BotonAddCar;
*/
