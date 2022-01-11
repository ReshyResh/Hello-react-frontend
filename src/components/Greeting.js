import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPostsRequest } from '../redux/dataReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);
  const greeting = useSelector((state) => state.dataReducer.greeting);
  return (
    <h1>{greeting}</h1>
  );
};

export default Greeting;
