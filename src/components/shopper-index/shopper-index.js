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
            </header>
            </BrowserRouter>
        </div>
    )
}