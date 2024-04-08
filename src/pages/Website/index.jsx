import './style.scss';
import { Grid, Box, Typography } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useEffect, useState } from 'react';
import Route from '../../router';
import NavBarLinks from '../../data/NavBar';
import LanguagesDialog from './LanguagesDialog';
import { useLanguageContext } from '../../contexts/LanguageContext';


const Website = () => {
    const { hideLoading } = useLoadingContext();
    const { currentLanguage } = useLanguageContext();

    const [languageDialogOpen, setLanguageDialogOpen] = useState(false);


    useEffect(() => {
        hideLoading();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Grid container component='main' className='container-website'>
                <Header />

                <Grid container className='grid-content-website' id='website-content'>
                    {
                        NavBarLinks.map((link, index) => {
                            return <Route component={link.component} path={link.path} exact={true} key={index} />;
                        })
                    }

                    <Footer />
                </Grid>

                <Box className='trigger-changelanguage' onClick={() => setLanguageDialogOpen(true)}>
                    <img src={currentLanguage.icon} alt={currentLanguage.initials} className='trigger-changelanguage-icon' />
                    <Typography className='trigger-changelanguage-name'>{currentLanguage.initials}</Typography>
                </Box>
            </Grid>

            <LanguagesDialog 
                isOpen={languageDialogOpen} 
                setClosedDialog={() => setLanguageDialogOpen(false)} 
            />
        </>
    );
}


export default Website;