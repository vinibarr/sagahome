
import './style.scss';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AlertMessageSeverityProps } from '../../data/AlertMessage';
import { useLanguageContext } from '../../contexts/LanguageContext';


const AlertMessage = ({ severity, message, onClose }) => {
    const { translate } = useLanguageContext();
    const severityProps = AlertMessageSeverityProps[severity.toLowerCase()];
    const SeverityIcon = severityProps.icon;

    return (
        <Box component={Paper} elevation={4} className='paper-alertmessage'>
            <SeverityIcon className={`icon-severity ${severityProps.className}`} />

            <Box className='box-main'>
                <Box className='box-header'>
                    <Box className={`box-severity ${severityProps.className}`}>
                        <Typography variant='subtitle1' component='span' className='text-title'>
                            {translate(severityProps.title)}
                        </Typography>
                    </Box>

                    <IconButton className='iconbutton-close' size='small' onClick={onClose}>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </Box>

                <Box className='box-content'>
                    {
                        message.split('\n').map((text, index) => {
                            return <Typography variant='subtitle2' component='span' className='text-message' key={index}>
                                {text}
                            </Typography>;
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
}


export default AlertMessage;