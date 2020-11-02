import React from 'react';
import './LanguageSelector.css';
import { Dropdown } from 'rsuite';


function LanguageSelector({ language, updateLanguage }) {

    const toDisplayLang = { 'python': 'Python 3', 'c++': 'C++', 'java': 'Java', 'javascript': 'JavaScript' };

    const changeLanguage = (lang) => {
        console.log(lang)
        updateLanguage(lang);
    }

    return (
        <Dropdown title={toDisplayLang[language]}>
            <Dropdown.Item onSelect={() => changeLanguage('python')}>Python 3</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage('cpp')}>C++</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage('java')}>Java</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage('javascript')}>JavaScript</Dropdown.Item>
        </Dropdown>
    )
}


export default LanguageSelector
