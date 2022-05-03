const INITIAL_STATE = {
  sections: [
    {
      title: 'horror',
      imageUrl: 'https://i.ibb.co/ccHLGVv/horror.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'comedy',
      imageUrl: 'https://i.ibb.co/syTrfsZ/comedy.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'romantic',
      imageUrl: 'https://i.ibb.co/wKBvcqW/romantic.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'action',
      imageUrl: 'https://i.ibb.co/5KPm00s/action.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'sci-fi',
      imageUrl: 'https://i.ibb.co/bd9cLWh/sci-fi.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
