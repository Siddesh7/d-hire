import { useParams } from "react-router-dom";
import EditManager from "../components/editManagers";

export default function Manager() {
  const { wallet } = useParams();
  const data = wallet.split("::");
  return (
    <div className="w-[85%] m-auto mt-[40px] h-[88vh]">
      <EditManager
        wallet={data[0]}
        company={data[1]}
        role={data[2]}
        url={wallet}
      />
    </div>
  );
}
