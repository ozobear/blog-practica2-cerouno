import React from 'react'

function Navbar() {
    return (
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""></img>
                </a>
            
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
            
                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                    Home
                    </a>
            
                    <a class="navbar-item" href="/">
                    Servicios
                    </a>
            
                    <a class="navbar-item" href="/">
                    Acerca de...
                    </a>

                    <a class="navbar-item" href="/">
                    Contacto
                    </a>
                </div>
                </div>
            </nav>
        </header> 
    );
}

export default Navbar;