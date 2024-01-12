// App.js
import React, { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer';
import Body from './components/Body';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('vi');

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <div id="wrapper">
      <LanguageSwitcher
        languages={['vi', 'en']}
        onLanguageChange={changeLanguage}
        currentLanguage={currentLanguage} 
      />
      <Body currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default App;
