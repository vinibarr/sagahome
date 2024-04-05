import './style.scss';
import { Box, Grid, Typography } from "@mui/material";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';


const Products = (props) => {
    const { translate } = useLanguageContext();

    return <Grid container id='products-section'>
        <Grid item xs={12} className='grid-content-section padding-none'>
            <Box className='wallpaper small' sx={{ backgroundImage: `url(${DefaultConstants.products.wallpaper})` }}>
                <Typography className='wallpaper-title'>
                    {translate(DefaultConstants.products.title)}
                </Typography>

                <Typography className='wallpaper-subtitle'>
                    {translate(DefaultConstants.products.subtitle)}
                </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} className='grid-content-section'>
            {
                DefaultConstants.products.items.map((item, index) => {
                    return <Box key={index} className='products-container'>
                        <Typography className='category-name'> {translate(item.name)} </Typography>
                        <Typography className='category-description'> {translate(item.description)} </Typography>

                        <Box className='products-list'>
                            {
                                item.products.map((p, index2) => {
                                    return <Box className='product-item' key={index2}>
                                        <Box className='product-item-image' sx={{ backgroundImage: `url(${p.images[0]})` }} />
                                        <Typography className='product-item-name'>
                                            {translate(p.name)}
                                        </Typography>
                                    </Box>
                                })
                            }
                        </Box>
                    </Box>
                })
            }
        </Grid>
    </Grid>;
}


export default Products;