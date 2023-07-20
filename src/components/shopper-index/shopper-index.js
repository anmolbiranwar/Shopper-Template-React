import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

export function ShopperIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="d-flex bg-dark text-white p-2 justify-content-between">
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
            </BrowserRouter>
        </div>
    )
}