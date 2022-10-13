import React from 'react';
import ClientNavbar from './ClientNavbar';
import {useState} from 'react';
import axios from 'axios';

export default function ClientHome() {
    var token='Bearer '+sessionStorage.getItem("token");
    var id=sessionStorage.getItem("id");
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [totalCost, setTotalCost] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [messageShow, setMessageShow] = useState(null);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const handleItemName = (e) => {
        setItemName(e.target.value);
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
    const handleTotalCost = (e) => {
        setTotalCost(e.target.value);
    }
    const handleShippingAddress = (e) => {
        setShippingAddress(e.target.value);
    }
    const submit = (e) => {
        

        if(itemName=='' || totalCost=='' || quantity=='' || shippingAddress==''){
            setColor("red");
            setMessage("Fill all details!");
            setMessageShow(true);
            setTimeout(function() {
                setMessageShow(false);
            }.bind(this), 2000);
        }
        else{
            axios.post('http://localhost:8080/order/saveOrder', {
                headers: {
                    'authorization': token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                itemName: itemName,
                clientId:id,
                quantity: quantity,
                totalCost: totalCost,
                shippingAddress: shippingAddress,
                orderStatus:1,
            })
                .then(result => {
                    setColor("#46b800");
                    setMessage("Placed order successfully!");
                    setMessageShow(true);
                    console.log(result);
                    setTimeout(function() {
                        setMessageShow(false);
                    }.bind(this), 2000);
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
        

    }
    const Results = () => (
        <h4 id="results" className="search-results" style={{color:color}}>
          {message}
        </h4>
      )

    return (
        <div>
            <ClientNavbar/>
            <h1>Create Order</h1>
            <div class="col-4" style={{margin: "auto", textAlign: 'left'}}>
                <form>
                { messageShow ? <Results /> : null }
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Item Name</label>
                        <input type="text" class="form-control" value={itemName} onChange={handleItemName} id="itemName"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Quantity</label>
                        <input type="text" class="form-control" value={quantity} onChange={handleQuantity} id="quantity"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Total Cost</label>
                        <input type="text" class="form-control" value={totalCost} onChange={handleTotalCost}
                               id="totalCost" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Shipping Address</label>
                        <input type="text" class="form-control" value={shippingAddress} onChange={handleShippingAddress}
                               id="shippingAddress" aria-describedby="emailHelp"/>
                    </div>
                </form>
                    <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                
            </div>
        </div>
    )
}
