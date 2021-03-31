import React from 'react';
import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import styles from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={styles.SYSL}>
            <div className={styles.HeaderBar}>
                <nav>
                    <NavLink to="/" exact>Website</NavLink>
                    <NavLink to="/play-logger">Play Logger</NavLink>
                </nav>
            </div>
            <div className={styles.MainContent}>
                {props.children}
            </div>
        </div>
    );
};

export default layout;
