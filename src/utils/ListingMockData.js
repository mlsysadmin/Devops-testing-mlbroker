import { Filter, ImageTag } from "./IconTags.utils";
import property from "../images/Guest/property.png";
import Featured_1 from '../asset/newproperties-rent-sale/img1.png';
import Featured_2 from '../asset/newproperties-rent-sale/img2.png';
import Featured_3 from '../asset/newproperties-rent-sale/img3.png';

import sqm from '../asset/icons/outlined-sqm.png';
import shower from '../asset/icons/hotel-shower.png';
import bed from '../asset/icons/outlined-bed.png';


const MockData = [
    {
        listing_id: '123',
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 11,440,000/month',
        features: [
            {
                icon: '',
                value: "52 SqM"
            },
            {
                icon: '',
                value: "3"
            }
        ],
        status:'For Rent',
        pics: '15'
    },
    {
        listing_id: '1234',
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 11,440,000/month',
        features: [
            {
                icon: '',
                value: "52 SqM"
            },
            {
                icon: '',
                value: "3"
            }
        ],
        status:'For Rent',
        pics: '15'
    },
    {
        listing_id: '12345',
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 11,440,000/month',
        features: [
            {
                icon: '',
                value: "52 SqM"
            },
            {
                icon: '',
                value: "3"
            }
        ],
        status:'For Rent',
        pics: '15'
    },
    {
        listing_id: '123456',
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 11,440,000/month',
        features: [
            {
                icon: '',
                value: "52 SqM"
            },
            {
                icon: '',
                value: "3"
            }
        ],
        status:'For Rent',
        pics: '15'
    },
    {
        listing_id: '123457',
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 11,440,000/month',
        features: [
            {
                icon: '',
                value: "52 SqM"
            },
            {
                icon: '',
                value: "3"
            }
        ],
        status:'For Rent',
        pics: '15'
    }
]

const FeaturedProperties = [
    {
        listing_id: '123457',
        image: Featured_1,
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 90,440',
        features: [
            {
                icon: sqm,
                value: "52 SqM"
            }
        ],
        status:'For Rent',
        pics: '15'
    },
    {
        listing_id: '123457',
        image: Featured_2,
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 400,440,000',
        features: [
            {
                icon: sqm,
                value: "52 SqM"
            },
            {
                icon: bed,
                value: "3"
            }
        ],
        status:'For Sale',
        pics: '15'
    },
    {
        listing_id: '123457',
        image: Featured_3,
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 121,440,000',
        features: [
            {
                icon: sqm,
                value: "52 SqM"
            },
            {
                icon: shower,
                value: "3"
            }
        ],
        status:'For Pre-Selling',
        pics: '15'
    },
    {
        listing_id: '123457',
        image: Featured_3,
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 121,440,000',
        features: [
            {
                icon: sqm,
                value: "52 SqM"
            },
            {
                icon: bed,
                value: "3"
            }
        ],
        status:'For Pre-Selling',
        pics: '15'
    },
    {
        listing_id: '123457',
        image: Featured_3,
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 121,440,000',
        features: [
            {
                icon: sqm,
                value: "52 SqM"
            },
            {
                icon: shower,
                value: "3"
            }
        ],
        status:'For Pre-Selling',
        pics: '15'
    },
    {
        listing_id: '123457',
        image: Featured_3,
        title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do",
        price: 'PHP 121,440,000',
        features: [
            {
                icon: sqm,
                value: "52 SqM"
            },
            {
                icon: shower,
                value: "3"
            },
            {
                icon: bed,
                value: "3"
            }
        ],
        status:'For Pre-Selling',
        pics: '15'
    }
]

const Ratings = [
	{
		numRate: 5,
		user: "Sarah T",
		rate: "ML Brokerage made selling my home a breeze! The interface is user-friendly, and I quickly found interested buyers!",
	},
	{
		numRate: 4,
		user: "James K.",
		rate: "The property listing process was straightforward, but I wish there were more templates for photos. Overall, a solid experience!",
	},
	{
		numRate: 3,
		user: "Ethan P.",
		rate: "Functional website, but I encountered some limitations with the reporting features. It served its purpose, though.",
	},
	{
		numRate: 4.7,
		user: "Ava W.",
		rate: "Fantastic exposure for my rental property! I had several inquiries within days of posting.",
	},
	{
		numRate: 4,
		user: "Emily Carter",
		rate: "Great platform for posting listings! The interface is user-friendly, making it easy to sell properties quickly.",
	},
	{
		numRate: 4.5,
		user: "Michael Fort",
		rate: "Impressive site—lots of potential buyers! I sold my property within weeks, and the support team was helpful throughout.",
	},
];
const prop = property;
const cardData =[
    {
      title: "3 Bedroom House for Rent in North Town Residences",
      price: "PHP120,000/month",
      imgSrc: prop,
      beds: 3,
      baths: 3,
      size: 250,
      likes: 15,
      forsale: "New",
      subtitle: "House and Lot for Rent",
    },
    {
      title: "3 Bedroom House for Rent in North Town Residences",
      price: "PHP80,000/month",
      imgSrc: prop,
      beds: 3,
      baths: 3,
      size: 250,
      likes: 15,
      forsale: "New",
      subtitle: "House and Lot for Rent",
    },
    {
      title: "3 Bedroom House for Rent in North Town Residences",
      price: "PHP120,000/month",
      imgSrc: prop,
      beds: 3,
      baths: 3,
      size: 250,
      likes: 15,
      forsale: "New",
      subtitle: "House and Lot for Rent",
    },
    {
      title: "3 Bedroom House for Rent in North Town Residences",
      price: "PHP120,000/month",
      imgSrc: prop,
      beds: 3,
      baths: 3,
      size: 250,
      likes: 15,
      forsale: "New",
      subtitle: "House and Lot for Rent",
    },
    {
      title: "3 Bedroom House for Rent in North Town Residences",
      price: "PHP80,000/month",
      imgSrc: prop,
      beds: 3,
      baths: 3,
      size: 250,
      likes: 15,
      forsale: "New",
      subtitle: "House and Lot for Rent",
    },
    {
      title: "3 Bedroom House for Rent in North Town Residences",
      price: "PHP120,000/month",
      imgSrc: prop,
      beds: 3,
      baths: 3,
      size: 250,
      likes: 15,
      forsale: "New",
      subtitle: "House and Lot for Rent",
    },
  ]
export {
    MockData,
    FeaturedProperties,
    Ratings,
    cardData
};