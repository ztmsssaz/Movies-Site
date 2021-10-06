import { Fragment } from 'react'
import Header from './header';
import Footer from './footer';
import GlobalStyle from './theme/globalStyle';

function Layout({ children }) {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}
export default Layout;