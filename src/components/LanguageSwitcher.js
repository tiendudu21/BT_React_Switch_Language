
import React from 'react';
import Header from './Header'; 

const LanguageSwitcher = ({ onLanguageChange, currentLanguage }) => {
return (
    <div id="header">
    <Header currentLanguage={currentLanguage} /> 
    <div id="lang">
        <a href="#" onClick={() => onLanguageChange('vi')}>
        <span>việt nam</span>
        <img src="./images/vi.png" alt="" style={{ marginLeft: '5px' }} />
        
        </a>
        |
        <a href="#" onClick={() => onLanguageChange('en')}>

        <span>Anh</span>
        <img src="./images/en.png" alt="" style={{ marginLeft: '5px' }} />
        
        </a>
    </div>
    </div>
);
};

export default LanguageSwitcher;
