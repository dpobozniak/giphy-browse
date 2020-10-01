import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FunctionComponent = () => (
  <nav>
    <Link to="/favourites">Favourites</Link>
  </nav>
);

export default Navigation;
