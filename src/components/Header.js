import React from 'react';

const Header = ({ currentLanguage }) => {
  return (
    <h1 id="logo">
      <a href="#">
        {currentLanguage === 'vi' ? 'Học Viện Vietpro' : 'Vietpro Academy'}
      </a>
    </h1>
  );
};

export default Header;
