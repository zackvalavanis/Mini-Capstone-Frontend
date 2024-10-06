import axios from "axios";
import { useNavigate } from 'react-router-dom'

export function LogoutLink() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    navigate('/loginPage');
  };

  return (
    <a className="dropdown-item" onClick={handleClick}>Logout</a>
  );
}