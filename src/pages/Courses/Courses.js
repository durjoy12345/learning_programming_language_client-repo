import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../../others/Cart/Cart';

const Courses = () => {
    const allContent = useLoaderData();

    return (
        <div>
            <h1 className="fw-bold fs-2 ">Total Course {allContent.length}</h1>
      {
        allContent.map((content) => (
          <Cart key={content._id} content={content}></Cart>
        ))
      }
        </div>
    );
};

export default Courses;