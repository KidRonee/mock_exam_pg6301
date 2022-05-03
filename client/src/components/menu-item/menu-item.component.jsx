import React from 'react';
import { useNavigate } from 'react-router';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
      <MenuItemContainer size={size} onClick={() => navigate(linkUrl)}>
        <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
        </ContentContainer>
      </MenuItemContainer>
  );
};

export default MenuItem;
