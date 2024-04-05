
import './style.scss';
import { useCallback } from 'react';
import { Box, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import { Close } from '@mui/icons-material';


const Dialog = (
    {
        isOpen,
        setClosedDialog,
        showCloseButton = true,
        onCloseEventEnabled = false,
        title,
        fullWidth = false,
        fullHeight = false,
        maxWidth = 'xs',
        dialogActions = null,
        className = '',
        onSubmit = () => {},
        ...rest
    }
) => {
    
    const constructDialogActions = useCallback(() => {
        if (dialogActions) {
            return (
                <DialogActions className='dialogactions-default'>
                    {dialogActions}
                </DialogActions>
            );
        }

        return null;

        // eslint-disable-next-line
    }, [dialogActions]);


    return (
        <MuiDialog
            open={isOpen}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            onClose={onCloseEventEnabled ? setClosedDialog : undefined}
            PaperProps={{
                className: `dialog-default ${className} ${fullHeight ? 'full-height' : ''}`
            }}
        >
            <Box component='form' onSubmit={onSubmit} className='dialogform-default'>
                <DialogTitle className='dialogtitle-default'>
                    <Grid container alignItems='center'>
                        <Grid item flexGrow={10}>
                            {title}
                        </Grid>

                        <Grid item flexGrow={2} className='textalign-right'>
                            {
                                showCloseButton && (
                                    <IconButton size='small' onClick={setClosedDialog}>
                                        <Close fontSize='inherit' />
                                    </IconButton>
                                )
                            }
                        </Grid>
                    </Grid>
                </DialogTitle>
                
                <DialogContent className='dialogcontent-default' dividers={fullHeight}>
                    {rest.children}
                </DialogContent>
                
                {
                    constructDialogActions()
                }
            </Box>
        </MuiDialog>
    );
}

export default Dialog;
