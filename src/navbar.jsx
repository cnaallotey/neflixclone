import { Link } from 'react-router-dom';
import Logo from './images/logonew.png'


const Navbar = () => {
    return (
        <div><div className="w-full">
            <div className="max-w-screen-2xl mx-auto mt-5 px-5 xl:px-0">
                <div className="flex items-center justify-between">
                    <img src={Logo} alt="logo" className="h-8 md:h-12 lg:h-16" />
                    <Link to="/movies" className="px-3 py-2 text-base font-medium text-white bg-red-600 rounded-md hover:-translate-y-1 transition-all duration-100">
                        View movies
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;