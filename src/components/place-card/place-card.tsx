import { Offer } from '../../types';
import { MAX_RATING } from '../../const';
import {useState} from 'react';
import PremiumMark from '../premium-mark/premium-mark';
type PlaceCardProps = {
  offer: Offer;
}

export default function PlaceCard({offer} : PlaceCardProps) : JSX.Element {

  const { isFavorite, isPremium, previewImage, price, title, type, rating, id } = offer;

  const [, setCardStatus] = useState({isActive : false});

  const handleMouseEnter = () => {
    setCardStatus({isActive: true});
    console.log(`Card ${id} is active `);
  };

  const handleMouseLeave = () => {
    setCardStatus({isActive: false});
    console.log(`Card ${id} is inactive `);
  };

  return (
    <article className="cities__card place-card" id = { id }
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >

      <PremiumMark isPremium = {isPremium}/>

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={ previewImage } width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{ price }</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className=
            { `place-card__bookmark-button ${ isFavorite ? 'place-card__bookmark-button--active' : '' } button` } type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 / MAX_RATING * rating }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"> {title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
