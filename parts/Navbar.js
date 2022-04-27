import Link from "next/link"

const Navbar = () => {
    return ( 
        <nav>
            <Link href="/"><a className="logo"><h1>Ninjas Managment System</h1></a></Link>
            <Link href="/users/all"><a className="nav-link">List of ninjas</a></Link>
            <Link href="/users/add"><a className="nav-link">Add new ninja</a></Link>
            <Link href="/about"><a className="nav-link">About</a></Link>
        </nav>
     );
}
 
export default Navbar;

