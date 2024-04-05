
import { StorageConstants } from "../data/Constants";
import Languages from "../data/Languages";
import CryptoHelper from "./CryptoHelper";



const languageStorage = {
    _storageName: StorageConstants.languageStorageName,
    _defaultValue: Languages[0],

    validate: function (languageValue) {
        return Languages.find(lang => lang.value === languageValue) ?? this._defaultValue;
    },

    get: function () {
        const languageValue = CryptoHelper.privateCrypto.decrypt(localStorage.getItem(this._storageName) ?? '');
        return this.validate(languageValue);
    },

    set: function (language) {
        language = this.validate(language.value);
        
        const languageValueEncrypted = CryptoHelper.privateCrypto.encrypt(language.value);
        localStorage.setItem(this._storageName, languageValueEncrypted);
    }
}


export {
    languageStorage
}