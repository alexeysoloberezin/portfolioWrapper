import React from 'react';
import {Review} from "../../types/Portfolio";
import {Avatar} from "antd";

const Reviews = ({reviews}: { reviews: Review[] | [] }) => {
  return (
    <>
      {Array.isArray(reviews) && reviews.length > 0 &&
        <div className="case__info-reviews">
          <img className={"case__map"} src={"/20387-NSLLK8.jpg"} alt=""/>
          <div className="case__info-reviews-box">
            {reviews &&
              reviews.map(review => (
                <div className="review" key={review.content}>
                  <Avatar style={{backgroundColor: '#f56a00', verticalAlign: 'middle'}} size="large">
                    {review.name[0]}
                  </Avatar>
                  <div>
                    <b>{review.name}</b>
                    <p>{review.content}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }

    </>
  );
};

export default Reviews;