import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { ShopperHome } from "../shopper-home/shopper-home"

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
                    <div className="me-3">Home</div>
                    <div className="me-3">Men's Fashion</div>
                    <div className="me-3">Women's Fashion</div>
                    <div className="me-3">Jewelery</div>
                    <div className="me-3">Electronics</div>
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
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}