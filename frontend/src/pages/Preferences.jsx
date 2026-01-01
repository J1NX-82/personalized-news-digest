import Onboarding from "./Onboarding";
import { useNavigate } from "react-router-dom";

const Preferences = () => {
  const navigate = useNavigate();

  const handleSaved = () => {
    navigate("/"); // go back to digest
  };

  return <Onboarding onSaved={handleSaved} />;
};

export default Preferences;
