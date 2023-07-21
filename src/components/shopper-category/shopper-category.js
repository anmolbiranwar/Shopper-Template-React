import { useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

export function ShopperCategory()
{
    const params= useParams();
    const[products, setProducts]=useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://fakestoreapi.com/products/category/${params.catname}`,
        })
        .then(response=>{
            setProducts(response.data);
        })
    },[params.catname]);

    return(
        <div className="container-fluid">
            <h2>Shooper Category {params.catname}</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <div className="card m-2 p-2" style={{width:'200px'}}>
                            <img src={product.image} height="150" className="card-img-top"/>
                            <div className="card-header" style={{height:'150px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={'/details/'+product.id} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}