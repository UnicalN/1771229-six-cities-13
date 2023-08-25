

export type Offer = {

    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
  };

export type DetailedOffer = Offer & {
  description: string;
  bedrooms: number;
  goods : string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
  }


export type Review = {
  id: string;
  date: string;
  user: {
    avatarUrl: string;
    isPro: boolean;
    name: string;
  };
  comment: string;
  rating: number;
  }
