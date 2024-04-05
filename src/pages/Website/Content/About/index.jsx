import './style.scss';
import { Box, Grid, Typography } from "@mui/material";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';


const About = (props) => {
    const { translate } = useLanguageContext();

    return <Grid container id='about-section'>
        <Grid item xs={12} className='grid-content-section padding-none'>
            <Box className='wallpaper small' sx={{ backgroundImage: `url(${DefaultConstants.about.wallpaper})` }}>
                <Typography className='wallpaper-title'>
                    {translate(DefaultConstants.about.title)}
                </Typography>

                <Typography className='wallpaper-subtitle'>
                    {translate(DefaultConstants.about.subtitle)}
                </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} className='grid-content-section textalign-center'>
            {
                translate(DefaultConstants.about.description).split('<br>').map((d, index) => {
                    return <Typography key={index}> {d} </Typography>;
                })
            }
        </Grid>
    </Grid>;
}


export default About;