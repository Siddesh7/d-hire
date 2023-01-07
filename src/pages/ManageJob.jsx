import { useParams } from "react-router-dom";
import EditManager from "../components/editManagers";

export default function Manager() {
  const { wallet } = useParams();
  return (
    <div className="w-[85%] m-auto mt-[40px]">
      <EditManager wallet={wallet} />
    </div>
  );
}
