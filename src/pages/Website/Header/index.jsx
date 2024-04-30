import './style.scss';

import { Grid, Typography, IconButton, Backdrop, Box } from "@mui/material";
import DefaultConstants from "../../../data/Constants";
import { ClientImages } from "../../../data/Images";
import { useLanguageContext } from '../../../contexts/LanguageContext';
import { useCallback, useEffect, useState } from 'react';
import { Close, Email, LocationOn, Menu, MoreVert, Phone } from '@mui/icons-material';
import { history } from '../../../router/BrowserHistory';
import NavBarLinks from '../../../data/NavBar';
import DocumentHelper from '../../../helpers/DocumentHelper';


const Header = () => {
    const { translate, currentLanguage } = useLanguageContext();
    
    const [navLinkSelected, setNavLinkSelected] = useState('/');
    const [informationsActived, setInformationsActived] = useState(false);
    const [navBarActived, setNavBarActived] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    

    useEffect(() => {
        handleScroll();
        setNavBarActived(false);
        setNavLinkSelected(history.location.pathname);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const content = document.getElementById('website-content');
        if (content) {
            content.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // eslint-disable-next-line
    }, [history.location.pathname]);


    window.onscroll = useCallback(() => {
        handleScroll();
        // eslint-disable-next-line
    }, []);


    const handleScroll = useCallback(() => {
        setScrolling(window.scrollY > 60);
    }, []);

    return (
        <>
            <Grid container className='grid-header-website' id='website-header'>
                <Grid item xs={12} className='grid-header'>
                    <Grid item className='grid-navbar-trigger-open'>
                        <IconButton onClick={() => setNavBarActived(true)}>
                            <Menu />
                        </IconButton>
                    </Grid>

                    <img
                        src={ClientImages.LogoHorizontal}
                        alt={DefaultConstants.systemName}
                        className='image-logo cursor-pointer'
                        onClick={() => history.push('/')}
                    />

                    <Grid item className='grid-informations-trigger-open'>
                        <IconButton onClick={() => setInformationsActived(true)}>
                            <MoreVert />
                        </IconButton>
                    </Grid>

                    <Box className={`grid-informations ${informationsActived ? 'actived' : ''}`}>
                        <Box item className='grid-informations-trigger-close'>
                            <IconButton onClick={() => setInformationsActived(false)}>
                                <Close />
                            </IconButton>
                        </Box>

                        {
                            DefaultConstants.phones.length > 0 && (
                                <Box className='information-item'>
                                    <Phone className='information-item-icon' />

                                    <Box className='information-item-values'>
                                        {
                                            DefaultConstants.phones.map((p, index) => {
                                                return <Typography variant='body2' component='a' href={`tel:${p}`} key={index} className='information-item-value'>
                                                    {p}
                                                </Typography>
                                            })
                                        }
                                    </Box>
                                </Box>
                            )
                        }

                        {
                            DefaultConstants.emails.length > 0 && (
                                <Box className='information-item'>
                                    <Email className='information-item-icon' />

                                    <Box className='information-item-values'>
                                        {
                                            DefaultConstants.emails.map((e, index) => {
                                                return <Typography variant='body2' component='a' href={`mailto:${e}`} key={index} className='information-item-value'>
                                                    {e}
                                                </Typography>
                                            })
                                        }
                                    </Box>
                                </Box>
                            )
                        }

                        {
                            DefaultConstants.address && (
                                <Box className='information-item'>
                                    <LocationOn className='information-item-icon' />

                                    <Box className='information-item-values'>
                                        <Typography variant='body2' className='information-item-value disabled-hover'>
                                            {DefaultConstants.address.street[currentLanguage.value]}
                                        </Typography>
                                        
                                        <Typography variant='body2' className='information-item-value disabled-hover'>
                                            {DefaultConstants.address.city} - {DefaultConstants.address.zipCode}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} className={`grid-navbar ${scrolling ? 'scrolling' : ''} ${navBarActived ? 'actived' : ''}`}>
                    <Box className='grid-navbar-trigger-close'>
                        <IconButton onClick={() => setNavBarActived(false)}>
                            <Close />
                        </IconButton>
                    </Box>

                    {
                        NavBarLinks.map((link, index) => {
                            const isSelected = link.path === navLinkSelected ? 'selected' : '';

                            return (
                                <Typography 
                                    key={index} 
                                    className={`grid-navbar-item ${isSelected}`} 
                                    onClick={() => {
                                        history.push(link.path)
                                        DocumentHelper.setDocumentTitle(translate(link.name))
                                    }}
                                >
                                    {translate(link.name)}
                                </Typography>
                            );
                        })
                    }
                </Grid>

                <Backdrop open={informationsActived} onClick={() => setInformationsActived(false)} className='backdrop-informations' />
                <Backdrop open={navBarActived} onClick={() => setNavBarActived(false)} className='backdrop-navbar' />
            </Grid>
        </>
    );
}


export default Header;