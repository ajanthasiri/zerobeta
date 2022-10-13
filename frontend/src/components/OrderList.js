import React from 'react';
import ClientNavbar from './ClientNavbar';
import {useState} from 'react';
import axios from 'axios';
import {  useEffect } from "react";

export default function OrderList() {

    var token='Bearer '+sessionStorage.getItem("token");
    var id=sessionStorage.getItem("id");
    const [data, setData] = useState([]);
    const [messageShow, setMessageShow] = useState(null);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [x, setX] = useState(0);
    useEffect(() => {
        (async () => {
          
          const result = await axios("http://localhost:8080/order/getOrders/"+id);
          setData(result.data);
        })();
      }, [x]);

    
      const submit = (id) => (event) => {
        console.log(id);

        
        axios.put('http://localhost:8080/order/cancelOrder/'+id, {
            headers: {
                'authorization': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            
        })
            .then(result => {
                setX(x=>x+1);
                tableData=data.map((item)=>{
                    return (
                        <tr>
                            <td>{item.itemName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalCost}</td>
                            <td>{item.shippingAddress}</td>
                            <td>{(item.orderStatus==1?"New":(item.orderStatus==2)?"Dispatched":"Cancelled")}</td>
                            <td><button type="button" onClick={submit(item.id)} class="btn btn-danger">Cancel</button></td>
                        </tr>
                    )
                });
                setColor("red");
                setMessage("Order cancelled!");
                setMessageShow(true);
                setTimeout(function() {
                    setMessageShow(false);
                }.bind(this), 2000);
                console.log(result);
            })
            .catch(error => {
                setColor("red");
                setMessage("Error!");
                setMessageShow(true);
                setTimeout(function() {
                    setMessageShow(false);
                }.bind(this), 2000);
                console.log(error);
            });
        
        

    }
    const Results = () => (
        <h4 id="results" className="search-results" style={{color:color}}>
          {message}
        </h4>
      )

    let tableData=data.map((item)=>{
        return (
            <tr>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.totalCost}</td>
                <td>{item.shippingAddress}</td>
                <td>{(item.orderStatus==1?"New":(item.orderStatus==2)?"Dispatched":"Cancelled")}</td>
                <td><button type="button" onClick={submit(item.id)} class="btn btn-danger">Cancel</button></td>
            </tr>
        )
    })
    return (
        <div>
            <ClientNavbar/>
            <h1>Order List</h1>
            { messageShow ? <Results /> : null }
            <div class="col-7" style={{margin: "auto"}}>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Cost</th>
                        <th scope="col">Shipping Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancel Order</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
