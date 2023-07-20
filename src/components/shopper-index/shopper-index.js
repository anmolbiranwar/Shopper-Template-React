import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { ShopperHome } from "../shopper-home/shopper-home"
import { ShopperCategory } from "../shopper-category/shopper-category"

export function ShopperIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="d-flex p-1 justify-content-between">
                <div>
                    <h2>Shopper.</h2>
                </div>
                <nav className="d-flex">
                    <div className="me-3"><Link to="home" className="btn">Home</Link></div>
                    <div className="me-3"><Link to="category/men's fashion" className="btn">Men's Fashion</Link></div>
                    <div className="me-3"><Link to="category/women's fashion" className="btn">Women's Fashion</Link></div>
                    <div className="me-3"><Link to="category/jewelery" className="btn">Jewelery</Link></div>
                    <div className="me-3"><Link to="category/electronics" className="btn">Electronics</Link></div>
                </nav>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </header>
            <div className="mt-2 text-center bg-dark text-white p-1">
            ⚡ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡
            </div>
            <div className="mt-3">
                <Routes>
                    <Route path="/" element={<ShopperHome/>}/>
                    <Route path="home" element={<ShopperHome/>}/>
                    <Route path="category/:catname" element={<ShopperCategory/>}></Route>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}