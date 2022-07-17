export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <h1>
                    Mangat's Travels
                </h1>
            </div>
            <div className="menu-items">
                <ul className="items">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li className="btn">SIGN UP</li>
                </ul>
            </div>
        </nav>
    );
}
