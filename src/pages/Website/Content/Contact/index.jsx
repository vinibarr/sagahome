import './style.scss';
import { Box, Grid, Typography, TextField, MenuItem, Button } from "@mui/material";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';
import { Email, LocationOn, Phone, Send } from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { useLoadingContext } from '../../../../contexts/LoadingContext';
import { useAlertMessageContext } from '../../../../contexts/AlertMessageContext';
import FormHelper from '../../../../helpers/FormHelper';
import ContactService from '../../../../services/ContactService';


const Contact = (props) => {
    const { showLoading, hideLoading } = useLoadingContext();
    const { translate, currentLanguage } = useLanguageContext();
    const { showAlertMessage } = useAlertMessageContext();

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: DefaultConstants.contact.subjects[0],
        message: ''
    });

    const handleChangeForm = useCallback((target) => {
        const name = target.name;
        const value = target.value;

        setForm({
            ...form, 
            [name]: value
        });
    }, [form]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        showLoading();

        const formData = FormHelper.GenerateFormData(e);

        ContactService.SendMail(formData).then(resp => {
            showAlertMessage('success', translate('contactFormSentSuccessfully'));
            setForm({
                name: '',
                email: '',
                phone: '',
                subject: DefaultConstants.contact.subjects[0],
                message: ''
            });
        }).catch(err => {
            showAlertMessage('warning', translate('contactFormErrorOnTrySend'));
        }).finally(() => {
            hideLoading();
        });
        // eslint-disable-next-line
    }, [translate]);


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
                                {DefaultConstants.address.street[currentLanguage.value]}
                            </Typography>
                                        
                            <Typography variant='body2' className='contact-item-text disabled-hover'>
                                {DefaultConstants.address.city} - {DefaultConstants.address.zipCode}
                            </Typography>
                        </Grid>
                    )
                }

                <Grid item xs={12} marginTop={8}>
                    <iframe src={DefaultConstants.address.googleMaps} title='GoogleMaps' />
                </Grid>
            </Grid>

            <Grid container marginTop={8} className='alignitems-center' columnSpacing={4} rowSpacing={4}>
                <Grid item lg={5} xs={12} className='form-text'>
                    <Typography variant='h6' className='color-primary texttransform-uppercase fontsize-28'>
                        {translate('contactFormTitle')}
                    </Typography>

                    {
                        translate('contactFormDescription').split('<br>').map((d, index) => {
                            return <Typography variant='span' className='color-text-1 fontsize-20 display-block' marginTop={index === 0 ? 3 : 1} key={index}>
                                {d}
                            </Typography>;
                        })
                    }
                </Grid>

                <Grid item lg={7} xs={12}>
                    <Grid container component='form' onSubmit={handleSubmit} columnSpacing={4}>
                        <Grid item lg={6} xs={12}>
                            <TextField 
                                label={translate('name')} 
                                name='name'
                                variant="filled" 
                                margin="normal"
                                fullWidth
                                required
                                value={form.name}
                                onChange={e => handleChangeForm(e.target)}
                            />
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <TextField 
                                label={translate('phone')} 
                                name='phone'
                                variant="filled" 
                                margin="normal"
                                fullWidth
                                required
                                value={form.phone}
                                onChange={e => handleChangeForm(e.target)}
                            />
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <TextField 
                                label={translate('email')} 
                                type='email'
                                name='email'
                                variant="filled" 
                                margin="normal"
                                fullWidth
                                required
                                value={form.email}
                                onChange={e => handleChangeForm(e.target)}
                            />
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <TextField
                                select
                                label={translate('subject')}
                                name='subject'
                                variant="filled"
                                margin='normal'
                                fullWidth
                                required
                                value={form.subject}
                                onChange={e => handleChangeForm(e.target)}
                            >
                                {
                                    DefaultConstants.contact.subjects.map((subject, index) => {
                                        return (
                                            <MenuItem key={index} value={translate(subject, 'pt_br')}>
                                                {translate(subject)}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                label={translate('message')} 
                                name='message'
                                variant="filled" 
                                margin="normal"
                                fullWidth
                                required
                                value={form.message}
                                onChange={e => handleChangeForm(e.target)}
                                multiline
                                rows={4}
                            />
                        </Grid>

                        <Grid item xs={12} marginTop={4}>
                            <Button
                                type='submit'
                                variant='contained'
                                disableElevation
                                startIcon={
                                    <Send fontSize='medium' />
                                }
                                className='button-sendform'
                            >
                                {translate('send')}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
}


export default Contact;