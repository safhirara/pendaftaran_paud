import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Preloader from "./components/Preloader";
import routes from "./routes";
import { Route, Switch, Redirect } from "react-router-dom";
import { lazy } from "react";

const BaseLayout = lazy(() => import("./components/BaseLayout"));

function App() {
  const { pathname } = window.location;
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />

        <Route
          exact
          path={"/login"}
          render={() => {
            if (session) {
              return <Redirect to="/admin" />;
            }
            document.title = `Login | Pendaftaran Paud`;
            const Login = lazy(() => import("./pages/Login"));
            return (
              <React.Suspense fallback={<Preloader />}>
                <Login></Login>
              </React.Suspense>
            );
          }}
        />
        <Route
          exact
          path={"/"}
          render={() => {
            document.title = `Beranda | Pendaftaran Paud`;
            const Beranda = lazy(() => import("./pages/Beranda"));
            return (
              <React.Suspense fallback={<Preloader />}>
                <Beranda></Beranda>
              </React.Suspense>
            );
          }}
        />
        <Route
          exact
          path={"/daftar"}
          render={() => {
            document.title = `Daftar | Pendaftaran Paud`;
            const Daftar = lazy(() => import("./pages/Daftar"));
            return (
              <React.Suspense fallback={<Preloader />}>
                <Daftar></Daftar>
              </React.Suspense>
            );
          }}
        />
        <Route
          exact
          path={"/daftar/upload-dokumen"}
          render={() => {
            document.title = `Daftar | Pendaftaran Paud`;
            const UploadDokumen = lazy(() => import("./pages/UploadDokumen"));
            return (
              <React.Suspense fallback={<Preloader />}>
                <UploadDokumen></UploadDokumen>
              </React.Suspense>
            );
          }}
        />

        {routes.map((route) => {
          return (
            <Route
              key={Array.isArray(route.path) ? route.path[0] : route.path}
              exact={route.exact}
              path={route.path}
              render={() => {
                if (!session) {
                  return (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { returnUrl: window.location.pathname },
                      }}
                    />
                  );
                }
                document.title = `${route.title} | Pendaftaran Paud`;
                const AppLayout = BaseLayout;
                return (
                  <React.Suspense fallback={<Preloader />}>
                    {/* <AppLayout> */}
                    <route.component />
                    {/* </AppLayout> */}
                  </React.Suspense>
                );
              }}
            />
          );
        })}

        <Route path="*">
          <div>Page not found</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
