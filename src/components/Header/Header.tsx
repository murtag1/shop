import React from 'react';
import CartIcon from '../CartIcon/CartIcon';

function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">LOGO</div>
        <div className="header__cart">
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
