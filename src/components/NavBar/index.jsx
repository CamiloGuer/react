import React from 'react'
import CartWidget from '../CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Link } from 'react-router-dom';
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
        <Link class="nav-link" to='/'>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/category/men's clothing">Men's clothing</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/category/women's clothing">Women's clothing</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/category/electronics'>Electronics</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/category/jewelery'>Jewelery</Link>
      </li>
    </ul>
  </div>
  <CartWidget></CartWidget>
</nav>
  )
}

export default NavBar;