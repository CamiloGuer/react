import React from 'react'
import CartWidget from '../CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id='nombreNav' href="#">Nombre</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Categorías</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Más Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
    </ul>
  </div>
  <CartWidget></CartWidget>
</nav>
  )
}

export default NavBar;