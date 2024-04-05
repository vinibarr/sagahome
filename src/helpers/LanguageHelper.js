
import DefaultTranslation from '../translations/DefaultTranslation';
import ProductsTranslation from '../translations/ProductsTranslation';
import WebsiteTranslation from '../translations/WebsiteTranslation';


const allTranslations = {
    ...DefaultTranslation,
    ...WebsiteTranslation,
    ...ProductsTranslation
};

const FindTranslation = (key) => {
    if (allTranslations[key]) {
        return allTranslations[key];
    }
    
    console.warn(`Translation not found: ${key}`);
    return undefined;
}


const LanguageHelper = {
    FindTranslation
}


export default LanguageHelper;