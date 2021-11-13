import { Rating } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { userName, text, email, rating, pic } = review;
    return (
        <div className="course-wrapper">
            <div className="pic-div">
                <img src={email} alt="" />
            </div>
            <div className="course-card-info">
                <span className="course-price">{userName}</span>
                <p className="course-small-parse">
                    <span className="course-people">
                        {text}
                    </span>
                   
                    <p className="course-rating">
                        <Rating
                            name="half-rating-read"
                            defaultValue={rating}
                            precision={0.5}
                            readOnly
                        />
                    </p>
                </p>
            </div>
        </div>
    );
};

export default Review;