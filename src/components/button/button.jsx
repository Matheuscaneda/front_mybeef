import "./button.css";
import { useNavigate } from "react-router-dom/dist";

export const Button = ({ texto, props_style, link, params, onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      class={`button ${props_style}`}
      onClick={() => (onClick ? onClick() : navigate(link, { state: params }))}
    >
      {texto}
    </button>
  );
};
