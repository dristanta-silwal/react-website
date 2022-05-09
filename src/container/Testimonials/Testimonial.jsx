import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const Testimonial = () => {

  return (
    <>
      {(
        <>
          <h1>Testimonials</h1>
          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-content">
              <p className="p-text">Work Name</p>
              <div>
                <h4 className="bold-text">Person Name</h4>
                <h5 className="p-text">Details</h5>
              </div>
              <div className="app__testimonial-btns app__flex">
                testimonials.btn
              </div>
              <div className="app__testimonial-brands app__flex">
                testimonials brand
              </div>
            </div>
          </div>

          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-content">
              <p className="p-text">Work Name</p>
              <div>
                <h4 className="bold-text">Person Name</h4>
                <h5 className="p-text">Details</h5>
              </div>
              <div className="app__testimonial-btns app__flex">
                testimonials.btn
              </div>
              <div className="app__testimonial-brands app__flex">
                testimonials brand
              </div>
            </div>
          </div>


        </>
      )}

      <div className="app__testimonial-brands app__flex">
        testimonials brand
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
