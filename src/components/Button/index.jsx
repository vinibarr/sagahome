
import './style.scss';
import { Button as MuiButton } from "@mui/material";


const Button = (
    {
        onClick = () => {},
        label,
        color = 'white'
    }
) => {
    const className = `color-${color}`;

    return (
        <MuiButton className={`button-default ${className}`} onClick={onClick}>
            {label}
        </MuiButton>
    );
}

export default Button;
