import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../Componentes/login.js";
import { ListaProductosUsuario } from "../Componentes/userListaProductos.js";
import { CarritoCompras } from "../Componentes/userCarrito.js";
import { CrearUsuarios } from "../Componentes/AdminCrearUsuarios.js";
import { CrearProdcutos } from "./AdminCrearProductos.js";
import { ListaProductosAdmin } from "./AdminListaProductos";
import { ListaVentas } from "../Componentes/AdminListaVentas";



export const Navegacion = ({ rol }) => {
  return (
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/CrearProductos" element={<CrearProdcutos />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/ListaProductosAdmin" element={<ListaProductosAdmin />} />
          <Route path="/ListaVentas" element={<ListaVentas />} />
          
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/" element={< Login />} />
          <Route path="/ListaProductosUsuario" element={< ListaProductosUsuario />} />
          <Route path="/CarritoCompras" element={< CarritoCompras />} />
        </Fragment>
      )}
    </Routes>
  );
};