import React from 'react';
import * as yup from 'yup';

const Video8 = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });


  return (
    <div>

    </div>
  );
}

export default Video8;


