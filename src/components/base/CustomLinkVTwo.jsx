import { NavLink } from "react-router-dom";
import styled from "styled-components";

const generateLinkClass = ({ isActive }) =>
  isActive ? "link active_link" : "link";


function CustomLinkVTwo({ to, children, margin, color }) {
  return (
    <Link margin={margin} color={color}>
      <NavLink to={to} className={generateLinkClass}>{children}</NavLink>
    </Link>
  );
}

export default CustomLinkVTwo;

const Link = styled.div`
  {
    margin: 0;
    overflow: hidden;
    height: 40px;
    margin: 4px 0;
  }

  .link {
    display: flex;
    align-items: center;
    color: ${({ color }) => color || "gray"};
    text-decoration: none;
    margin-bottom: ${({ margin }) => margin || "12px"};
    height: 39px;
    border-radius: 5px;
    padding-left: 5px;
    transition: background 0.8s ease;
    &:hover {
      color: white;
      background: #2a2a2a;
      transition: background 0.5s ease;
    }
    &.active_link {
      color: white;
      background: #2a2a2a;
    }
  }
`;
