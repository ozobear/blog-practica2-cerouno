import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer footer-container">
                <h5>Suscríbete a nuestro Newsletter</h5>
                <div className="form-newsletter">
                    <input type="text" placeholder="Tu correo electrónico"></input>
                    <button>Suscribirme</button>
                </div>
            </footer>
        </div>
    );
};

export default Footer;