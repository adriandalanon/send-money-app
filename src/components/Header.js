import React from 'react';
import BackButton from './BackButton';
import LogoutButton from './LogoutButton';

const Header = ({ user, disableBack = false }) => {

    return (
        <div style={{ display: 'flex', justifyContent: disableBack ? 'flex-end' : 'space-between', alignItems: 'center' }}>
            {disableBack === false && <BackButton to="/dashboard" />}
            <div>
                {`Hello, ${(user || "").toUpperCase()}`}
                <LogoutButton />
            </div>
        </div>
    );
};

export default Header;
