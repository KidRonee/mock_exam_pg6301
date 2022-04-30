import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  //const signOutUser = dispatch(signOutStart());

  return (
      <HeaderContainer>
        <OptionLink to='/'>HOME</OptionLink>
        <OptionsContainer>
          {currentUser ? (
              <OptionLink as='div' onClick={() => dispatch(signOutStart())}>
                SIGN OUT
              </OptionLink>
          ) : (
              <OptionLink to='/signin'>SIGN IN</OptionLink>
          )}
        </OptionsContainer>
      </HeaderContainer>
  );
};

export default Header;
