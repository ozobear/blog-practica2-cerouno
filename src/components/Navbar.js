import React from 'react'

function Navbar() {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                    Home
                    </a>
            
                    <a className="navbar-item" href="/">
                    Servicios
                    </a>

                    {/* <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""></img>
                    </a> */}
            
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