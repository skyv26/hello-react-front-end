import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting/Greeting';
import { GreetingThunk } from './redux/greetingSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GreetingThunk());
  }, [dispatch]);
  return <Greeting />;
};

export default App;
