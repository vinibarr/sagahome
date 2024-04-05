import About from "../pages/Website/Content/About";
import Contact from "../pages/Website/Content/Contact";
import Home from "../pages/Website/Content/Home";
import Products from "../pages/Website/Content/Products";

const NavBarLinks = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '/products',
        name: 'products',
        component: Products
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
];

export default NavBarLinks;

