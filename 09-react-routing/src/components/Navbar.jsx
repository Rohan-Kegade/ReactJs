import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "5px" }}>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/about">About</Link>
        <Link to="/dashboard/careers">Careers</Link>
        <Link to="/dashboard/login">Login</Link>
        <Link to="/dashboard/register">Register</Link>
        <Link to="/dashboard/profile">Profile</Link>
      </nav>
    </>
  );
};

export default Navbar;
