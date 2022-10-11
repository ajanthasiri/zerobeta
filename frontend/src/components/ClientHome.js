import React from 'react';
import ClientNavbar from './ClientNavbar';
import {useState} from 'react';
import axios from 'axios';

export default function ClientHome() {

    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [totalCost, setTotalCost] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [message, setMessage] = useState(null)
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
        axios.post('http://localhost:8080/api/v1/user/saveUser', {
            itemName: itemName,
            quantity: quantity,
            totalCost: totalCost,
            shippingAddress: shippingAddress,
        })
            .then(result => {
                setMessage("success");
                console.log(result);
            })
            .catch(error => {
                setMessage("error");
                console.log(error);
            });
    }

    return (
        <div>
            <ClientNavbar/>
            <h1>Create Order</h1>
            <div class="col-4" style={{margin: "auto", textAlign: 'left'}}>
                <form>
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
                    <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
