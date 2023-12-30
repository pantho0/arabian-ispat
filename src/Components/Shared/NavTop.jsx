import Container from "../Utils/Container";
import { FaPhone } from "react-icons/fa6";
import { LuClock9 } from "react-icons/lu";

const NavTop = () => {
  return (
    <div className="bg-blue-600 text-white">
      <Container>
        <div className="flex justify-between">
        <div className="flex gap-2 items-center text-[11px]">
          <FaPhone />
          <p>+(880)1882433681</p>
          <LuClock9 />
          <p>SUN-THU: 9:00PM - 5:00PM</p>
        </div>
        <div className="text-[11px]">
            <p>e-mail : arabianispatltd@gmail.com</p>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default NavTop;
