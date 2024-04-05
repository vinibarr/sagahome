
import './style.scss';
import { Backdrop, CircularProgress } from '@mui/material';


const Loading = ({
    isOpen
}) => {
    return (
        <Backdrop
            open={isOpen}
            className='backdrop-loading'
        >
            <CircularProgress className='circular-progress' />
        </Backdrop>
    );
}

export default Loading;