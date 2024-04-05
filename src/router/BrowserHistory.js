
import { createBrowserHistory } from 'history';
import DefaultConstants from '../data/Constants';


const history = createBrowserHistory({
    basename: DefaultConstants.publicURL
});


export {
    history
}