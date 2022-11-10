import React from 'react';

const Review = ({ serviceReview }) => {
    console.log(serviceReview);
    const { email, photoURL, review, user } = serviceReview;
    console.log(email, photoURL, review, user);


    return (
        <div className='bg-base-200 rounded p-2 grid md:grid-cols-3 items-center mt-5 mb-5'>
            {/* user */}
            <div className='flex items-center'>
                <div className="avatar mr-2">
                    <div className="w-12 rounded-full">
                        <img src={photoURL} alt='img' />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg">{user}</h3>
                    <p>{email}</p>
                </div>
            </div>
            {/* service */}
            <div>
                <p>Review : {review}</p>
            </div>
            {/* edit */}
            <div className='flex justify-end'>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-error ml-2">Delete</button>
            </div>
        </div>
    );
};

export default Review;