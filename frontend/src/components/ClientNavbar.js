import React from 'react'

export default function ClientNavbar() {
    const logout= (e) => {
        sessionStorage.setItem("token", '');
        sessionStorage.setItem("id", '');
        window.location.href="/";
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Order System</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/client_home">Create Order</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/order_list">View Orders</a>
                            </li>
                        </ul>
                        <button type="button" onClick={logout} class="btn btn-secondary">Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
