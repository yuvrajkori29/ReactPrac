import { Link } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  return (
    <div className="flex gap-[10rem]">
      <div className="text-black text-[1.85rem] flex gap-[7rem] font-semibold" style={{ marginRight: "40rem",marginLeft:"10px" }}><Logo /></div>
      <div className="text-black text-[1.85rem] flex gap-[7rem] font-semibold">
        <Link to='/home/career'>Career</Link>
        <Link to='/home/about'>About</Link>
        <Link to='/home/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
