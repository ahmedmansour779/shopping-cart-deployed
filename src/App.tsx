import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import About from "./pages/About"
import Home from "./pages/Home"
import { PageNotFound } from "./pages/PageNotFound"
import Store from "./pages/Store"
import "./utilities/style"

function App() {
    return (
        <ShoppingCartProvider>
            <NavBar />
            <Routes>
                <Route path="/shopping-cart/" element={<Home />} />
                <Route path="/shopping-cart/store" element={<Store />} />
                <Route path="/shopping-cart/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ShoppingCartProvider>
    )
}

export default App