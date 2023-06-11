import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">{ children }</div>
            <Footer />
        </div>
    )
};

export default DefaultLayout;
