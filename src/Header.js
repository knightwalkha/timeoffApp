import React from "react"

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a href="/" class="navbar-brand"><strong>TimeOff.Management</strong></a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="/" class="nav-link"><strong>Login</strong></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header