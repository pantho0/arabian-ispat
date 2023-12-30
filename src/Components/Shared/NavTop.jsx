import Container from "../Utils/Container";
import { FaPhone } from "react-icons/fa6";
import { LuClock9 } from "react-icons/lu";
import { BsEnvelopeAtFill } from "react-icons/bs";

const NavTop = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
      <Container>
        <div className="flex justify-between">
        <div className="flex gap-2 items-center text-[11px]">
          <FaPhone />
          <p>+(880)1882433681</p>
          <LuClock9 />
          <p>SUN-THU: 9:00PM - 5:00PM</p>
        </div>
        <div className="flex gap-2 text-[11px] items-center">
            <BsEnvelopeAtFill/>
            <p>arabianispatltd@gmail.com</p>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default NavTop;
