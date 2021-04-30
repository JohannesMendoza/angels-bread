//homeGallery.jsx
//Johannes Mendoza
//HomeGallery is a class component that contains multiple product images in a collage style node package called Gallery from 'react-photo-gallery'
//photos are stored in an array (statically imported for now)
import Gallery from 'react-photo-gallery';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './styles/homeGallery.css';
import "react-image-gallery/styles/css/image-gallery.css";
import SimpleImageSlider from 'react-simple-image-slider';
//import { images } from '../imagesGallery.js';
import pic1 from "../images/homeGallery/IMG_1240.jpg";
import pic2 from "../images/homeGallery/IMG_1236.jpg";
import pic3 from "../images/homeGallery/IMG_1245.jpg";
import pic4 from "../images/homeGallery/IMG_5817.jpg";
import pic5 from "../images/homeGallery/IMG_1298.jpg";
import pic6 from "../images/homeGallery/IMG_1303.jpg";
import pic7 from "../images/homeGallery/IMG_1311.jpg";
import pic8 from "../images/homeGallery/C6F0B1EF-65F6-48EE-A3EF-A86AAE9CDF3D.jpg";
import pic9 from "../images/homeGallery/7CA9DC74-7799-4AA2-8E72-CBCD29518027_1_201_a.jpg"
import pic10 from "../images/homeGallery/IMG_5829.jpg";
import pic11 from "../images/homeGallery/IMG_1304.jpg";


const photos = [
    {
        src: pic3,
        width: 3,
        height: 2
    },
    {
        src: pic9,
        width: 3,
        height: 5
    },
    {
        src: pic5,
        width: 3,
        height: 2
    },
    {
        src: pic1,
        width: 3,
        height: 2
    },
    {
        src: pic2,
        width: 3,
        height: 2
    },
    {
        src: pic4,
        width: 3,
        height: 2
    },
    {
        src: pic7,
        width: 3,
        height: 5
    },
    {
        src: pic10,
        width: 4,
        height: 3
    }
];

const photos2 = [
    {
        original: pic11,
        thumbnail: pic11
    },
    {
        original: pic5,
        thumbnail: pic5
    },
    {
        original: pic11,
        thumbnail: pic11
    },
    {
        original: pic11,
        thumbnail: pic11
    },
    {
        original: pic11,
        thumbnail: pic11
    },
    {
        original: pic11,
        thumbnail: pic11
    },
    {
        original: pic11,
        thumbnail: pic11
    },
];
const images = [
    {
        url: pic11
    },
    {
        url: pic9
    }
];
//                <Gallery photos={photos} />

class HomeGallery extends Component {
    render() {
        return (
            <React.Fragment>
                <ImageGallery items={photos2} showThumbnails={false} />
            </React.Fragment>
        );
    }
}

export default HomeGallery;