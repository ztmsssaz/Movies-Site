import { lazy, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./config";
import { isloggedIn } from '../helpers'
import Loader from "../components/loader";
import Layout from '../layout';
import ProfileHeader from '../layout/profile-header'

const Login = lazy(() => import("../pages/auth/login"));
const Home = lazy(() => import("../pages/home"));
const AboutUS = lazy(() => import("../pages/about-us"));
const SeeMovie = lazy(() => import("../pages/movie"));
const UserProfile = lazy(() => import("../pages/user-profile"));
const Search = lazy(() => import("../pages/search"));
const Categories = lazy(() => import("../pages/categories"));
const ShowCategory = lazy(() => import("../pages/categories/show-category"));

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
                        <PublicRoute isLogin={isLogin} path="/search" exact>
                            <Search />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/categories" exact>
                            <Categories />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/categories/:name/:id" exact>
                            <ShowCategory />
                        </PublicRoute>
                        <PublicRoute isLogin={isLogin} path="/login" restricted={true} exact>
                            <Login />
                        </PublicRoute>
                        <PrivateRoute isLogin={isLogin} path="/profile" exact>
                            <ProfileHeader />
                            <UserProfile />
                        </PrivateRoute>
                    </Switch>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}
export default MainRouter;