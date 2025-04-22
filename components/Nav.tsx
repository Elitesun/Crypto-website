const Nav = () => {
return (
<>
    {/* Navigation */}
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold">CRYPTO.</h1>
        </div>
        <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">What's new?</a>
            <button className="bg-[#CCFF00] text-black px-6 py-2 rounded-full hover:bg-[#b8e600] transition">
                Explore now
            </button>
        </div>
    </nav>
</>
);
}

export default Nav;