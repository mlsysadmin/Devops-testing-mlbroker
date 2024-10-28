import image from '../asset/banners/listing.png';
import Buy from '../asset/icons/buy.png';
import Sell from '../asset/icons/sell.png';
import Rent from '../asset/icons/rent.png';
import Landlord from '../asset/icons/landlord.png';
import { Image } from 'antd';

const CardCategory = [
	{
		icon: Buy,
		image: image,
		category: "Buy",
		decription: `Explore a diverse range of properties, from cozy starter homes to 
        luxurious estates and everything in between. Whatever your preferences and budget, 
        we have options to suit your needs.`,
		buttonTitle: "Browse Homes",
		link: '/all'
	},
	{
		icon: Sell,
		image: image,
		category: "Sell",
		decription: `Our platform is designed to expedite the selling process, saving you time and effort.`,
		buttonTitle: "See your options",
		link: '/sell'
	},
	{
		icon: Rent,
		image: image,
		category: "Rent",
		decription: `Discover your dream rental property today! Let us help you find the 
        perfect place to live your best life!`,
		buttonTitle: "Find rentals",
		link: '/all/?sale_type=rent'
	},
	// {
	// 	icon: Rent,
	// 	image: image,
	// 	category: "Rent",
	// 	decription: `Discover your dream rental property today! Let us help you find the 
	//     perfect place to live your best life!`,
	// 	buttonTitle: "Find rentals",
	// },
	// {
	// 	icon: Rent,
	// 	image: image,
	// 	category: "Rent",
	// 	decription: `Discover your dream rental property today! Let us help you find the 
	//     perfect place to live your best life!`,
	// 	buttonTitle: "Find rentals",
	// },
];

const PropertyTypeCategory = [
	"commercial",
	"residential",
	"industrial"
]

const PropertyType = [
	"service office",
	"shop",
	"retail",
	"commercial land",
	"condominium",
	"house & lot",
	"lot",
	"townhouse",
	"warehouse",
	"farm lot",
	"hotel",
	"resort",
	"apartment",
]

const PropertyTypes = [
	{
		key: "commercial",
		label: <span>Commercial</span>,
		title: "Commercial",
		options: [
			{ label: "Service Office", value: "service-office" },
			{ label: "Shop/Retail", value: "shop/retail" },
			{ label: "Commercial Land/Lot", value: "commercial-land/lot" },
		],
	},
	{
		key: "residential",
		label: <span>Residential</span>,
		title: "Residential",
		options: [
			{ label: "Condominium", value: "condominium" },
			{ label: "House & Lot", value: "house-and-lot" },
			{ label: "Lot", value: "lot" },
			{ label: "Townhouse", value: "townhouse" },
			{ label: "Apartment", value: "apartment" },
		],
	},
	{
		key: "industrial",
		label: <span>Industrial</span>,
		title: "Industrial",
		options: [
			{ label: "Warehouse", value: "warehouse" },
			{ label: "Farm Lot", value: "farm-lot" },
			{ label: "Hotel/Resort", value: "hotel-and-resort" },
		]
	}
]

const ListingTypes = [
	{
		label: "For Rent",
		value: "rent",
	},
	{
		label: "For Sale",
		value: "sale",
	},
	{
		label: "Pre-Selling",
		value: "pre-selling",
	}
]

export {
	CardCategory,
	PropertyType,
	PropertyTypeCategory,
	PropertyTypes,
	ListingTypes
};