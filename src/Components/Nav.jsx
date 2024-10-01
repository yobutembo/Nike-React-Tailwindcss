import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* Desktop Menu */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}

          
          <ul className={` hidden
          ${isOpen?'max-lg:flex max-lg:flex-col absolute w-3/4 top-14 right-12 bg-coral-red gap-6 text-white py-2 mt-2':'max-lg:hidden'}
            flex-row flex-1 drop-shadow-xl justify-center items-center gap-16`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg max-lg:text-white text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul> 
        <div onClick={()=>{isOpen?setisOpen(false):setisOpen(true)}} className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
