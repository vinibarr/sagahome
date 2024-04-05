
import './style.scss';

import { Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useEffect } from 'react';
import Route from '../../router';
import NavBarLinks from '../../data/NavBar';


const Website = () => {
    const { hideLoading } = useLoadingContext();

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
            </Grid>
        </>
    );
}


export default Website;