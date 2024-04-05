
import { createContext, useContext, useState, useCallback } from "react";
import LanguageHelper from "../../helpers/LanguageHelper";
import { languageStorage } from "../../helpers/StorageHelper";


const LanguageContext = createContext(undefined);

const LanguageContextProvider = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState(languageStorage.get());
    
    const handleChangeCurrentLanguage = useCallback((languageValue) => {
        const language = languageStorage.validate(languageValue);
        
        languageStorage.set(language);
        setCurrentLanguage(language);

        // eslint-disable-next-line
    }, []);


    const handleTranslation = useCallback((text, languageValue) => {
        const language = languageStorage.validate(languageValue ?? currentLanguage.value);
        const translation = LanguageHelper.FindTranslation(text);
        return translation !== undefined ? translation[language.value] : text;

        // eslint-disable-next-line
    }, [currentLanguage]);


    const data = {
        currentLanguage,
        setCurrentLanguage: handleChangeCurrentLanguage,
        translate: handleTranslation
    }

    return (
        <LanguageContext.Provider value={data}>
            {props.children}
        </LanguageContext.Provider>
    );
}


const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    
    if (context === undefined) {
        throw new Error('useLanguageContext must be used within a LanguageContextProvider');
    }
    
    return context;
}


export {
    useLanguageContext
}

export default LanguageContextProvider;