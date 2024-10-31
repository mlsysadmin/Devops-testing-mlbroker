import { Skeleton } from "antd";
import React from "react";

const CardSkeleton = () => {
    return (
        <div className="skeleton--card-listing" id="card-listing">
            <Skeleton.Image
                className="skeleton--card-img property-img"
                active
            />
            <br />
            <br />
            <Skeleton
                active
                variant="rectangular"
                className="skeleton--card-title"
                paragraph={{
                    rows: 1
                }}
                title
            />
            <br />
            <br />
            <div className="skeleton--features">
                <Skeleton
                    active
                    paragraph={false}
                    className="skeleton--card-price"
                />
                <div className="skeleton--feature-items">
                    {
                        Array(3).fill(null).map((_, i) => (
                            <Skeleton.Avatar
                                active
                                paragraph={false}
                                className="skeleton--card-feature"
                                shape="square"
                                key={i}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
const FeaturesSkeleton = () => {
    return (
        <div className="featured-property" id="skeleton--feature-listing">
            <div>
                <Skeleton.Image
                    className="skeleton--feature-img featured-img"
                    active
                />
                <Skeleton
                    paragraph={false}
                    className="skeleton--feature-title"
                />
                <br />
                <Skeleton
                    paragraph={false}
                    className="skeleton--feature-sale_type"
                />
                <br />
                <br />
                <div className="skeleton--feature-items">
                    {
                        Array(3).fill(null).map((_, i) => (
                            <Skeleton.Avatar
                                active
                                paragraph={false}
                                className="skeleton--card-feature"
                                shape="square"
                                key={i}
                            />
                        ))
                    }
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}
export {
    CardSkeleton,
    FeaturesSkeleton
}