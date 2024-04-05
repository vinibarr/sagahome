
import {
    ErrorOutlineRounded,
    TaskAltRounded,
    WarningAmberRounded,
    InfoOutlined,
    CellTowerRounded
} from '@mui/icons-material';


const AlertMessageSeverityProps = {
    error: {
        icon: ErrorOutlineRounded,
        className: 'severity-error',
        title: 'error'
    }, 
    
    info: {
        icon: InfoOutlined,
        className: 'severity-info',
        title: 'information'
    }, 
    
    success: {
        icon: TaskAltRounded,
        className: 'severity-success',
        title: 'success'
    }, 
    
    warning: {
        icon: WarningAmberRounded,
        className: 'severity-warning',
        title: 'warning'
    }, 
    
    timeout: {
        icon: CellTowerRounded,
        className: 'severity-timeout',
        title: 'timeLimitExceeded'
    }
};


export {
    AlertMessageSeverityProps
};