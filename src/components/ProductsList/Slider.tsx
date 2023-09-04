import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperOptions } from 'swiper/types/swiper-options'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

type Props = {
    images: string[]
}
const Slider = ({ images }: Props) => {
    const swiperParams: SwiperOptions = {
        cssMode: true,
        navigation: true,
        pagination: true,
        mousewheel: true,
        keyboard: true,
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
    }
    return (
        <Swiper {...swiperParams} className="mySwiper">
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default Slider
