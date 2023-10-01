const Navbar = () => {
    return (
        <div className="fixed p-2 bg-black/30 w-full top-0 flex">
            <img src="img/logo-white.png" alt="logo" className="h-8 px-2 mt-1"/>
            <h1 className="text-3xl font-bold text-zinc-50">Melostream</h1>
            <p>{import.meta.env.VITE_TEST}</p>
        </div>
    );
};

export default Navbar;