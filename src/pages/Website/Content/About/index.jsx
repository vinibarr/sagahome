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
            <Typography className='section-title'>
                {translate('protectingYourHomeWithTechnology')}
            </Typography>

            {
                translate('aboutDescription1').split('<br>').map((d, index) => {
                    return <Typography variant='body1' className='position-relative' paddingY={1} key={index}>
                        {d}
                    </Typography>;
                })
            }
        </Grid>

        <Grid item xs={12} className='grid-content-section textalign-center'>
            <Typography className='section-title'>
                {translate('ourProducts')}
            </Typography>

            {
                DefaultConstants.products.items.map((item, index) => {
                    return <Box key={index} marginTop={index === 0 ? 0 : 4}>
                        <Typography className='fontweight-600'>
                            {index + 1}. {translate(item.name)}:
                        </Typography>

                        <Typography className=''>
                            {translate(item.aboutDescription)}
                        </Typography>
                    </Box>;
                })
            }
        </Grid>
    </Grid>;
}


export default About;