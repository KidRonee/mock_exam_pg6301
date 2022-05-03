import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import ShopPage from "./pages/shop/shop.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
      <div>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route
              path='/signin'
              element={
                currentUser ? (
                    <Navigate replace to={'/'} />
                ) : (
                    <SignInAndSignUpPage />
                )
              }
          />
        </Routes>
      </div>
  );
};

export default App;
