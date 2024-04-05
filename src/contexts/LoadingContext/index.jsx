import { createContext, useCallback, useContext, useState } from "react";
import Loading from "../../components/Loading";


const LoadingContext = createContext(undefined);

const LoadingContextProvider = (props) => {
    const [countLoading, setCountLoading] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const hideLoading = useCallback(() => {
        const countLoadingAux = countLoading - 1;

        if (countLoadingAux <= 0) {
            setIsLoading(false);
        }

        setCountLoading(countLoadingAux);
        setIsLoading(false);

        // eslint-disable-next-line
    }, [countLoading]);


    const showLoading = useCallback(() => {
        setCountLoading(countLoading + 1);
        setIsLoading(true);

        // eslint-disable-next-line
    }, [countLoading]);


    const data = {
        hideLoading,
        showLoading
    }

    return (
        <LoadingContext.Provider value={data}>
            {props.children}

            <Loading isOpen={isLoading} />
        </LoadingContext.Provider>
    );
}


const useLoadingContext = () => {
    const context = useContext(LoadingContext);
    
    if (context === undefined) {
        throw new Error('useLoadingContext must be used within a LoadingContextProvider');
    }
    
    return context;
}

export { 
    useLoadingContext
};

export default LoadingContextProvider;


