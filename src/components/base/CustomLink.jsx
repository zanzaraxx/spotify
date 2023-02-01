import { NavLink } from "react-router-dom";
import styled from "styled-components";

const generateLinkClass = ({ isActive }) =>
  isActive ? "link active_link" : "link";

function CustomLink({
  to,
  children,
  margin,
  color,
}) {
  return (
    <Link
      margin={margin}
      color={color}
    >
      <NavLink to={to} className={generateLinkClass} end>
        {children}
      </NavLink>
    </Link>
  );
}

export default CustomLink;

const Link = styled.div`
   {
    margin: 0;
    overflow: hidden;
  }

  .link {
    display: block;
    color: ${({ color }) => color || "gray"};
    text-decoration: none;
    margin-bottom: ${({ margin }) => margin || "12px"};
    &:hover {
      color: white;
    }
    &.active_link {
      color: ${({ activeColor }) => activeColor || "white"};
      background: ${({ activeBackground }) => activeBackground || "none"};
    }
  }
`;
