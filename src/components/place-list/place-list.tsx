import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types';

type OfferListProps = {
  offers: Offer[];
}


export default function PlaceList({ offers }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) =>
          <PlaceCard offer={offer} key={offer.id}/>)
      }
    </div>
  );
}
