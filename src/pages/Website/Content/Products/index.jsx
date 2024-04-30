import './style.scss';
import { Box, Grid, Typography } from "@mui/material";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';
import { useState } from 'react';
import Slider from '../../../../components/Slider';


const Products = (props) => {
    const { translate, currentLanguage } = useLanguageContext();

    const [selectedProduct, setSelectedProduct] = useState(undefined); 


    return <>
        <Grid container id='products-section'>
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

                            {
                                translate(item.description).split('<br>').map((d, index2) => {
                                    return <Typography className='category-description' key={index2}> {d} </Typography>;
                                })
                            }

                            <Box className='products-list'>
                                {
                                    item.products.map((p, index2) => {
                                        return <Box className='product-item' key={index2} onClick={() => setSelectedProduct(p)}>
                                            <Box className='product-item-image' sx={{ backgroundImage: `url(${p.wallpaper})` }} />
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
        </Grid>

        <Slider
            open={selectedProduct !== undefined}
            handleClose={() => setSelectedProduct(undefined)}
            title={selectedProduct ? translate(selectedProduct.name) : undefined}
            items={selectedProduct ? selectedProduct.images[currentLanguage.value] : []}
        />
    </>;
}


export default Products;