import Navbar from './navbar.jsx'
import Hero from './hero.jsx';


const Home = () => {
    return (
        <div>
            <div className="w-full bg-hero-image h-full">
                <div className="bg-gradient-to-b bg-black w-full bg-opacity-60">
            
                    <Navbar />
                    <Hero />
                </div>
        </div>
        </div>
    )
}


export default Home;