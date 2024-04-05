
import DefaultConstants from '../data/Constants';


const setDocumentTitle = (page) => {
    if (page) {
        document.title = `${DefaultConstants.systemName} | ${page}`;
    } else {
        document.title = `${DefaultConstants.systemName}`;
    }
}


const setDocumentFavIcon = (path) => {
    const favIcon = document.getElementById('favicon');

    if (favIcon != null) {
        favIcon.href = path;
    }
}


const DocumentHelper = {
    setDocumentTitle,
    setDocumentFavIcon
}


export default DocumentHelper;