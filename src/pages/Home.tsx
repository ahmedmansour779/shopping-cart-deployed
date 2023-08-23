import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import { heightPage } from '../utilities/style'

function Home() {
    return (
        <div className="home-wrapper" style={{ height: heightPage }}>
            <Container className='d-flex flex-column align-items-start gap-3 mb-2'>
                <h1>Shopping Cart</h1>
                <p>
                    "Welcome to our Online Store! Discover a world of convenience and endless possibilities right at your fingertips. Whether you're searching for the latest fashion trends, high-quality electronics, or unique home decor, we have it all. Explore our vast selection of products, curated with care to meet your needs and desires. Enjoy a seamless shopping experience, easy navigation, and secure transactions. We're here to provide you with exceptional customer service and ensure your satisfaction. Start browsing now and let us help you find exactly what you're looking for. Happy shopping!"
                </p>
                <button>
                    <Link to={"/shopping-cart/store"} style={{ textDecoration: "none" }}>
                        Explore our products
                    </Link>
                </button>
            </Container>
        </div>
    )
}

export default Home