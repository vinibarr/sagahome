
import CryptoJS from "crypto-js";
import { KeyConstants } from "../data/Constants";


const privateCrypto = {
    _key: KeyConstants.privateKey,

    encrypt: function (string) {
        try {
            return CryptoJS.AES.encrypt(string, this._key).toString();
        } catch {
            return '';
        }
    },

    decrypt: function (string) {
        try {
            const bytes  = CryptoJS.AES.decrypt(string, this._key);
            return bytes.toString(CryptoJS.enc.Utf8);
        } catch {
            return '';
        }
    }
}


const CryptoHelper = {
    privateCrypto
};

export default CryptoHelper;