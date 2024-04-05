import './style.scss';

import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { ClientImages } from '../../../data/Images';
import DefaultConstants from '../../../data/Constants';
import { useLanguageContext } from '../../../contexts/LanguageContext';
import NavBarLinks from '../../../data/NavBar';
import { history } from '../../../router/BrowserHistory';
import DocumentHelper from '../../../helpers/DocumentHelper';


const Footer = (props) => {
    const { translate } = useLanguageContext();
    
    return (
        <Grid container className='grid-footer-website'>
            <Grid item md={6} xs={12} className='grid-navbar'>
                {
                    NavBarLinks.map((link, index) => {
                        return (
                            <Typography 
                                variant='subtitle2' 
                                className='text-footer text-navbar' 
                                key={index} 
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

            <Grid item md={6} xs={12} className='grid-socialmedia'>
                {
                    DefaultConstants.socialMedias.filter(s => s.url !== undefined).map((s, index) => {
                        return (
                            <IconButton className='iconbutton-socialmedia' onClick={() => window.open(s.url)} key={index}>
                                <s.Icon />
                            </IconButton>
                        );
                    })
                }
            </Grid>

            <Grid item xs={12}>
                <Divider className='footer-divider' />
            </Grid>

            <Grid item md={4} xs={12}>
                <img
                    src={ClientImages.LogoHorizontalWhite}
                    alt={DefaultConstants.systemName}
                    className='image-logo'
                />
            </Grid>

            <Grid item md={8} xs={12} className='display-flex flexdirection-column justifycontent-center alignitems-flexend'>
                <Typography variant='body2' className='text-footer text-copyright'> 
                    {translate("copyright")}
                </Typography>
                
                <Typography variant='caption' className='text-footer text-developed'> 
                    {translate("developedBy")}
                    {' '}
                    <Typography variant='caption' component='a' className='text-footer text-developer' href={DefaultConstants.developer.url} target='_blank'>
                        {DefaultConstants.developer.name} 
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    );
}


export default Footer;