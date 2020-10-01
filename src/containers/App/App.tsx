import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import GlobalStyles from './GlobalStyles';

const Details = lazy(() => import(/* webpackChunkName: "details" */'../Details/Details'));
const Home = lazy(() => import(/* webpackChunkName: "home" */'../Home/Home'));
const Search = lazy(() => import(/* webpackChunkName: "search" */'../Search/Search'));
const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */'../NotFound/NotFound'));
const DetailsModal = lazy(() => import(/* webpackChunkName: "detailsModal" */'../Details/DetailsModal'));
const Favourites = lazy(() => import(/* webpackChunkName: "favourites" */'../Favourites/Favourites'));

const App: FunctionComponent = () => {
  const location = useLocation();

  // This piece of state is set when one of the
  // gifs links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gifs list in the background, behind
  // the modal.
  const background = location.state && location.state.background;

  return (
    <>
      <GlobalStyles />
      <div className="page-wrapper">
        <Header />
        <main>
          <Suspense fallback={null}>
            <Switch location={background || location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/search/:query?" component={Search} />
              <Route path="/details/:id?" component={Details} />
              <Route path="/favourites" component={Favourites} />
              <Route component={NotFound} />
            </Switch>
            {/* Show the modal when a background page is set */}
            {background && <Route path="/details/:id?" component={DetailsModal} />}
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App;
