import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

export function ShopperIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header>
                <div>
                    <h2>Shopper.</h2>
                </div>
                <nav>
                    <div>Home</div>
                    <div>Men's Fashion</div>
                    <div>Women's Fashion</div>
                    <div>Jewelery</div>
                    <div>Electronics</div>
                </nav>
                <div>
                    <span className="bi bi-search"></span>
                    <span className="bi bi-person"></span>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart4"></span>
                </div>
            </header>
            </BrowserRouter>
        </div>
    )
}