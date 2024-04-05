import './style.scss';
import { Box, Grid, Typography } from "@mui/material";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';
import { Email, LocationOn, Phone } from '@mui/icons-material';


const Contact = (props) => {
    const { translate } = useLanguageContext();

    return <Grid container id='contact-section'>
        <Grid item xs={12} className='grid-content-section padding-none'>
            <Box className='wallpaper small' sx={{ backgroundImage: `url(${DefaultConstants.contact.wallpaper})` }}>
                <Typography className='wallpaper-title'>
                    {translate(DefaultConstants.contact.title)}
                </Typography>

                <Typography className='wallpaper-subtitle'>
                    {translate(DefaultConstants.contact.subtitle)}
                </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} className='grid-content-section'>
            <Grid container className='justifycontent-center'>
                {
                    DefaultConstants.phones.length > 0 && (
                        <Grid item lg={4} xs={12} className='contact-item'>
                            <Phone className='contact-item-icon' />
                            
                            {
                                DefaultConstants.phones.map((p, index) => {
                                    return <Typography variant='body2' component='a' href={`tel:${p}`} key={index} className='contact-item-text'>
                                        {p}
                                    </Typography>
                                })
                            }
                        </Grid>
                    )
                }

                {
                    DefaultConstants.emails.length > 0 && (
                        <Grid item lg={4} xs={12} className='contact-item'>
                            <Email className='contact-item-icon' />
                            
                            {
                                DefaultConstants.emails.map((e, index) => {
                                    return <Typography variant='body2' component='a' href={`mailto:${e}`} key={index} className='contact-item-text'>
                                        {e}
                                    </Typography>
                                })
                            }
                        </Grid>
                    )
                }

                {
                    DefaultConstants.phones.length > 0 && (
                        <Grid item lg={4} xs={12} className='contact-item'>
                            <LocationOn className='contact-item-icon' />

                            <Typography variant='body2' className='contact-item-text disabled-hover'>
                                {DefaultConstants.address.street}
                            </Typography>
                                        
                            <Typography variant='body2' className='contact-item-text disabled-hover'>
                                {DefaultConstants.address.city} - {DefaultConstants.address.zipCode}
                            </Typography>
                        </Grid>
                    )
                }

                <Grid item xs={12} marginTop={8}>
                    <iframe src={DefaultConstants.contact.googleMaps} title='GoogleMaps' />
                </Grid>
            </Grid>

            <Grid container marginTop={8} className='alignitems-center'>
                <Grid item lg={4} xs={12} className='form-text'>
                    <Typography variant='h6' className='color-primary texttransform-uppercase fontsize-28'>
                        {translate('contactFormTitle')}
                    </Typography>

                    <Typography variant='span' className='color-text-1 texttransform-uppercase fontsize-20 display-block' marginTop={2}>
                        {translate('contactFormDescription')}
                    </Typography>
                </Grid>

                <Grid item lg={8} xs={12}>
                    <Grid container component='form'>
                        form
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
}


export default Contact;