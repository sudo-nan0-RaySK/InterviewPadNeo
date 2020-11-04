import React, {useContext} from 'react';
import './LanguageSelector.css';
import { Dropdown } from 'rsuite';
import {CodeContext} from '../contexts/CodeContext';


function LanguageSelector() {
    const {codeOptions,updateLanguage} = useContext(CodeContext);
    const toDisplayLang = { 'Python': 'Python 3', 'C': 'C++', 'Java': 'Java', 'Javascript': 'JavaScript' };

    const changeLanguage = (lang) => {
        console.log(lang)
        updateLanguage(lang);
    }

    return (
        <Dropdown title={toDisplayLang[codeOptions.language]}>
            <Dropdown.Item onSelect={() => changeLanguage('Python')}>Python 3</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage('C')}>C++</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage('Java')}>Java</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage('Javascript')}>JavaScript</Dropdown.Item>
        </Dropdown>
    )
}


export default LanguageSelector
