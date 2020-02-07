import React from 'react'

function Navbar() {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
            
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
            
                <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                    Home
                    </a>
            
                    <a className="navbar-item" href="/">
                    Servicios
                    </a>

                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""></img>
                    </a>
            
                    <a className="navbar-item" href="/">
                    Acerca de...
                    </a>

                    <a className="navbar-item" href="/">
                    Contacto
                    </a>
                </div>
                </div>
            </nav>
        </header> 
    );
}

export default Navbar;