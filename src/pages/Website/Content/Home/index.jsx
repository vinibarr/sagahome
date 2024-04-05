import './style.scss';
import { Box, Grid, Typography } from "@mui/material";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';
import Button from '../../../../components/Button';
import { history } from '../../../../router/BrowserHistory';


const Home = (props) => {
    const { translate } = useLanguageContext();

    return <Grid container id='home-section'>
        <Grid item xs={12} className='grid-content-section padding-none'>
            <Box className='wallpaper'>
                <Box className='video-container'>
                    <Box className='video-content'>
                        <iframe 
                            src={DefaultConstants.wallpaper.url} 
                            title={DefaultConstants.wallpaper.title}
                        />
                    </Box>
                </Box>
            </Box>
        </Grid>

        <Grid item xs={12} className='grid-content-section'>
            <Typography className='section-title'>
                {translate('ourProducts')}
            </Typography>

            <Box className='product-list'>
                {
                    DefaultConstants.products.items.map((p, index) => {
                        return <Box className='product-item' key={index} onClick={() => history.push('/products')}>
                            <Box className='product-item-image' sx={{ backgroundImage: `url(${p.image})` }} />
                            <Typography className='product-item-name'>
                                {translate(p.name)}
                            </Typography>
                        </Box>;
                    })
                }
            </Box>

            <Box marginTop={6} className='textalign-center'>
                <Button color='primary' label={translate('readMore')} onClick={() => history.push('/products')} />
            </Box>
        </Grid>

        <Grid item xs={12} className='grid-content-section'>
            <Typography className='section-title'>
                {translate('ourCatalog')}
            </Typography>

            <Box className='catalog-list'>
                <iframe 
                    src={DefaultConstants.catalog.url} 
                    title={DefaultConstants.catalog.title} 
                />
            </Box>
        </Grid>

        <Grid item xs={12} className='grid-content-section container-aboutus' sx={{ backgroundImage: `url(${DefaultConstants.about.wallpaper})` }}>
            <Typography className='section-title color-white'>
                {translate(DefaultConstants.about.title)}
            </Typography>

            <Typography variant='body1' className='color-white position-relative'>
                {translate(DefaultConstants.about.shortDescription)}
            </Typography>

            <Box marginTop={6}>
                <Button color='white' label={translate('readMore')} onClick={() => history.push('/about')} />
            </Box>
        </Grid>
    </Grid>;
}


export default Home;