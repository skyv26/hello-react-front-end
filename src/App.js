import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import Greeting from './components/Greeting/Greeting';
import { GreetingThunk } from './redux/greetingSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GreetingThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/" element={<Navigate replace to="/greeting" />} />
    </Routes>
  );
};

export default App;
