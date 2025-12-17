import {Link} from "react-router"

const Header=()=>{
    return(
        <header className="w-full bg-slate-800 text-white p-4">

            <nav className="flex gap-4 justify-center items-center">
                <Link to='/' >Home</Link>
                <Link to='/products' >Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/loginForm">Login</Link>
            </nav>
        </header>
    )
}

export default Header