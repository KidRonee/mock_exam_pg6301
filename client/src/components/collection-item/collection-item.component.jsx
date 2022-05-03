import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
      <CollectionItemContainer>
        <BackgroundImage
            className='image'
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
        />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
      </CollectionItemContainer>
  );
};

export default CollectionItem;
