import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className='footer'>
            <div style={{ marginBottom: '20px' }}>
                <div>
                    Location: Av. des Champs-Élysées 877
                </div>
                <div>
                    Email: LiberteEtAmourOfficial@gmail.com
                </div>
                <div>
                    Instagram: @LibertéEtAmourOfficial
                </div>
                <div>
                    Phone: +33 1 23 87 42 45
                </div>
                <div>
                    Copyright © 2024 <strong>Liberté et Amour</strong>. All Rights Reserved.
                </div>
            </div>
            <div className='brandName'>Liberté et Amour</div>
        </footer>
    );
}

export default Footer;
