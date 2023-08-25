import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

// eslint-disable-next-line react-refresh/only-export-components
const SETTING = {
  cardAmount: 5,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardAmount={SETTING.cardAmount}
      offers = {offers}
      //reviews = {reviews}
    />
  </React.StrictMode>,
);
