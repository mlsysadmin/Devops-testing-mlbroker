import React from "react";
import { Carousel, Rate } from "antd";

import '../styles/rating.css';
import { Ratings } from "../utils/ListingMockData";

const RatingCarouselComponent = () => {
    const UserName = (user) => {
        const fullNameSplit = user.split(' ');
        const lastname = fullNameSplit[1].substring(0, 1);
        const firstName = fullNameSplit[0];

        return `${ firstName } ${lastname}.`;

    }

    const HideRate = (review) => {
        return review.length > 150 ? review.slice(0, 150) : review
    }
    return (
        <div className="rating" style={{
            textAlign: 'center'
        }}>
            <Carousel arrows={true} infinite={true} className="rate-carousel" dots={false}>
                {
                    Ratings.map((rate, i) => {
                        return (
                            <div className="user-rate" key={i}>
                                <Rate disabled value={rate.numRate} />
                                <div className="rate">
                                {/* <p>"dsfsdfd"</p> */}
                                <p>"{ HideRate(rate.rate) }..."</p>
                                </div>
                                <div className="rate--user-name">
                                    { 
                                        UserName(rate.user)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default RatingCarouselComponent;