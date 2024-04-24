import './style.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Backdrop, Box, IconButton, Typography } from "@mui/material";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Slider = ({
    open,
    handleClose,
    title = undefined,
    items = []
}) => {
    const [swiper, setSwiper] = useState(undefined);

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(0);
        }
    }, [items, swiper]);

    return <Backdrop open={open} className='slider-default'>
        <Box>
            <IconButton onClick={() => handleClose()}>
                <Close />
            </IconButton>
        </Box>

        <Box flex={1}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides
                navigation
                pagination={{ clickable: true }}
                className='slider-swiper'
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {
                    items.map((i, index) => {
                        return <SwiperSlide className='slide-item'>
                            <img src={i} alt={index} />
                        </SwiperSlide>;
                    })
                }
            </Swiper>
        </Box>

        {
            title && <Typography className='slider-title'>{title}</Typography>
        }
    </Backdrop>;
}


export default Slider;