import { lazy, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./config";
import { isloggedIn } from 'helpers'
import Loader from "components/loader";
import Layout from 'layout';

const Login = lazy(() => import("pages/auth/login"));
const Page404 = lazy(() => import("pages/Page404"));
const Home = lazy(() => import("pages/home"));
const AboutUS = lazy(() => import("pages/about-us"));
const Person = lazy(() => import("pages/person"));
const SeeMovie = lazy(() => import("pages/movies/movie"));
const TVShows = lazy(() => import("pages/movies/tv-shows"));
const UserProfile = lazy(() => import("pages/user-profile"));
const Search = lazy(() => import("pages/search"));
const Froks = lazy(() => import("pages/home-forkes"));
const Categories = lazy(() => import("pages/categories"));
const ShowCategory = lazy(() => import("pages/categories/show-category"));

function MainRouter() {
    const isLogin = isloggedIn();
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Switch>
                        <PublicRoute isLogin={isLogin} path="/" exact>
                            <Home />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/about-us" exact>
                            <AboutUS />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/movie/:id" exact>
                            <SeeMovie />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/tv/:id" exact>
                            <TVShows />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/person/:id" exact>
                            <Person />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/search" exact>
                            <Search />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/forks/:name" exact>
                            <Froks />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/categories" exact>
                            <Categories />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/categories/:type/:name/:id" exact>
                            <ShowCategory />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/login" restricted={true} exact>
                            <Login />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/page404" exact>
                            <Page404 />
                        </PublicRoute>
                        <PrivateRoute isLogin={isLogin} path="/profile" exact>
                            <UserProfile />
                        </PrivateRoute>
                        <PublicRoute isLogin={isLogin}>
                            <Page404 />
                        </PublicRoute>
                    </Switch>
                </Layout>
            </Suspense>
        </BrowserRouter >
    )
}
export default MainRouter;