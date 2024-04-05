
import { createContext, useCallback, useContext, useState } from "react";
import { Snackbar, Box } from '@mui/material';
import AlertMessage from "../../components/AlertMessage";


const AlertMessageContext = createContext(undefined);

const AlertMessageContextProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState('');
    const [timeout, setTimeout] = useState(0);

    const showAlertMessage = useCallback((severity, message, timeout = 7000) => {
        setSeverity(severity);
        setMessage(message);
        setTimeout(timeout);
        setIsOpen(true);
    }, []);


    const closeAlertMessage = useCallback(() => {
        setIsOpen(false);
    }, []);


    const handleClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    }, []);


    const data = {
        showAlertMessage,
        closeAlertMessage
    }

    return (
        <AlertMessageContext.Provider value={data}>
            {props.children}

            <Snackbar
                open={isOpen}
                autoHideDuration={timeout}
                onClose={handleClose}
                anchorOrigin={{
                    horizontal: "right", 
                    vertical: "bottom"
                }}
            >
                <Box>
                    <AlertMessage
                        severity={severity}
                        message={message}
                        onClose={handleClose}
                    />
                </Box>
            </Snackbar>
        </AlertMessageContext.Provider>
    );
}

const useAlertMessageContext = () => {
    const context = useContext(AlertMessageContext);
    
    if (context === undefined) {
        throw new Error('useAlertMessageContext must be used within a AlertMessageContextProvider');
    }
    
    return context;
}


export {
    useAlertMessageContext
}

export default AlertMessageContextProvider;