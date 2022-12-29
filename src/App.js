import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import { authSelector } from './app/redux/selectors/authSelector';
import { DefaultLayout } from './components/Layouts';

function App() {

    const userSelector = useSelector(authSelector)
    console.log(userSelector.data)

    return (
        <Router>
            <div className="App">
                <Routes>
                    {!userSelector.data
                        ? publicRoutes.map((route, index) => {
                              const Page = route.component;
                              const Layout = route.layout || Fragment;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout>
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              );
                          })
                        : privateRoutes.map((route, index) => {
                              const Page = route.component;
                              const Layout = route.layout || DefaultLayout;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout>
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              );
                          })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
