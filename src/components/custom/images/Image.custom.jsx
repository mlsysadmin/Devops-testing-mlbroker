import { Image } from 'antd';
import React from 'react';
import Listing from '../../../asset/banners/listing.png';


const CustomImage = ({ preview, width }) => {
    return (
        <Image
            src='error'
            fallback={Listing}
            preview={preview}
            height={240}
            width={width}
        />
    )
}

export default CustomImage;