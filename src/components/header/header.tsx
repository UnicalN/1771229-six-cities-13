import {Outlet} from 'react-router-dom';

import { AuthData } from '../../types';

import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

import { AuthHeader } from '../auth-header/auth-header';

type HeaderFooterProps = {
  authorizationStatus: boolean;
  authData: AuthData;
}

export default function Header({ authorizationStatus, authData} : HeaderFooterProps) {
  const {pathname} = useLocation();
  const isFavoritePage = pathname === AppRoute.Favorites;
  const isMainPage = pathname === AppRoute.Root;

  return (
    <div className={`page ${isMainPage ? 'page--gray page--main' : ''}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41}/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile"href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>

                    {`${authorizationStatus ? '<span className="header__user-name user__name"> Oliver.conner@gmail.com </span><span className="header__favorite-count">3</span></a></li><li className="header__nav-item"><span className="header__signout">Sign out</span>' : '<span className="header__login">Sign in</span>'}`}


                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>

        <Outlet />
      </main>

      {`${isFavoritePage ? '<footer className="footer container"><a className="footer__logo-link" href="main.html"><img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" /></a></footer>' : ''}`}
    </div>
  );
}
