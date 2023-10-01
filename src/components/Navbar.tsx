import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between fixed top-0 h-full w-60 p-4 bg-black/50">
            <div className="flex">
                <img src="img/logo-white.png" alt="logo" className="h-8 pr-2 mt-1"/>
                <h1 className="text-3xl font-bold text-zinc-50">Melostream</h1>
            </div>
            <div className="text-xs text-center text-black flex flex-row justify-evenly font-sans">
                <a href="https://github.com/camhbrt/melostream" className='text-3xl hover:text-black/60'><AiFillGithub/></a>
                <p>© 2023 Camille Hébert. <br/> All rights reserved.</p>
            </div>
        </div>
    );
};

export default Navbar;