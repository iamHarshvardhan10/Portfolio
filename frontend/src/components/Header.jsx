import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-7 h-[80px] px-5 py-1 bg-[#e5e5e5] rounded-xl">
      <div className="flex">
        <Link to="/" className="no-underline p-2 bg-dark rounded-[50%]">
          <h1 className="mx-1 text-xl text-[#fff] ">HB</h1>
        </Link>

        <ul className="flex items-center justify-between gap-4 ml-12 ">
          <li className="text-[20px]  font-sans">Works</li>
          <li className="text-[20px]  font-sans">Blog</li>
          <li className="text-[20px]  font-sans">About</li>
        </ul>
      </div>
      <div>
        <form className="flex items-center justify-center gap-3 p-3 bg-[#d4d4d4] rounded-[10px]">
          <FaSearch className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search Site..."
            id="Search"
            className="outline-none input"
          />
        </form>
      </div>
      <div className="flex items-center justify-between gap-10 ">
        <ul className="flex items-center justify-center ">
          <li className="m-2 bg_circle">
            <FaXTwitter  style={{color:'grey', hover:'black'}}/>
          </li>
          <li className="m-2 bg_circle">
            <FiGithub  style={{color:'grey', hover:'black'}} />
          </li>
          <li className="m-2 bg_circle">
            <FaLinkedinIn  style={{color:'grey', hover:'black'}}/>
          </li>
        </ul>
        <div>
          <button className="flex items-center justify-between  bg-dark text-[white] px-[15px] py-[10px] rounded-[10px]">
            Login <CgProfile className="w-6 ml-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
