import { Grid, Typography } from "@mui/material";
import Dialog from "../../components/Dialog";
import { useLanguageContext } from "../../contexts/LanguageContext";
import Languages from "../../data/Languages";


const LanguagesDialog = ({
    isOpen = false, 
    setClosedDialog = () => {} 
}) => {
    const { currentLanguage, setCurrentLanguage, translate } = useLanguageContext();

    return (
        <Dialog
            isOpen={isOpen}
            setClosedDialog={setClosedDialog}
            onCloseEventEnabled={true}
            title={translate('changeLanguage')}
            fullWidth={true}
            className='dialog-changelanguage'
        >
            <Grid container>
                {
                    Languages.map((language, index) => {
                        const selectedClass = language.value === currentLanguage.value ? 'selected' : '';

                        return (
                            <Grid
                                item
                                xs={12}
                                key={index}
                                className={`grid-language-item ${selectedClass}`}
                                onClick={() => {
                                    setCurrentLanguage(language.value);
                                    setClosedDialog();
                                }}
                            >
                                <img
                                    src={language.icon}
                                    alt={language.initials}
                                    className='icon'
                                />

                                <Typography className='name'>
                                    {translate(language.text)}
                                </Typography>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Dialog>
    );
}


export default LanguagesDialog;