import React from 'react';
import { NavLink } from 'react-router-dom';

const layout = (props) => {
    return (
        <div className="sysl">
            <nav>
                <NavLink to="/" exact>Website</NavLink>
                <NavLink to="/play-logger">Play Logger</NavLink>
            </nav>
            {props.children}
        </div>
    );
};

export default layout;
