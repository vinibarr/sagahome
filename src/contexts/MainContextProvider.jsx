
import AlertMessageContextProvider from './AlertMessageContext';
import LoadingContextProvider from './LoadingContext';
import LanguageContextProvider from './LanguageContext';


const MainContextProvider = (props) => {
    return (
        <>
            <LoadingContextProvider>
                <LanguageContextProvider>
                    <AlertMessageContextProvider>
                        {props.children}
                    </AlertMessageContextProvider>
                </LanguageContextProvider>
            </LoadingContextProvider>
        </>
    );
}


export default MainContextProvider;