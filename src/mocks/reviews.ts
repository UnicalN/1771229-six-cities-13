import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      avatarUrl: 'https://url-to-image/image.png',
      isPro:  false,
      name: 'Oliver Conner',
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },

  {
    id: '2',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      avatarUrl: 'https://url-to-image/image.png',
      isPro:  false,
      name: 'Oliver Conner',
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5,
  },
];
