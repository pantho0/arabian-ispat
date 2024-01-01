import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { TbSunElectricity } from "react-icons/tb";
import Container from "../Utils/Container";

const Environment = () => {
    return (
        <div className="mt-20 mb-20">
            <h2 className="text-4xl text-blue-600 text-center">Sustainability and <br /> Environmental Impact</h2>
            <div>
      <Container>
        <div className="grid md:grid-cols-4 gap-2">
        {/* Card-1 */}
        <div className="card">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-green-600 rounded-full p-4 transition-transform transform hover:scale-105">
           <MdEnergySavingsLeaf/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Green Initiatives</h2>
            <p>Our sustainable initiatives, shaping a greener and more responsible future</p>
          </div>
        </div>
        {/* Card-2 */}
        <div className="card ">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-orange-600 rounded-full p-4 transition-transform transform hover:scale-105">
           <FaBalanceScaleLeft/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Carbon Neutral Operations</h2>
            <p>We achieve carbon neutrality, minimizing environmental impact and fostering a sustainable operational model</p>
          </div>
        </div>
        {/* Card-3 */}
        <div className="card ">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-blue-600 rounded-full p-4 transition-transform transform hover:scale-105">
           <FaRecycle/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Recyclable Materials Usage</h2>
            <p>Embrace our commitment to sustainability through the use of recyclable materials, reducing environmental impact.</p>
          </div>
        </div>
        {/* Card-4 */}
        <div className="card ">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-yellow-500 rounded-full p-4 transition-transform transform hover:scale-105">
           <TbSunElectricity/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Renewable Energy Adoption</h2>
            <p>Our commitment to renewable energy, powering our operations sustainably and reducing our ecological footprint.</p>
          </div>
        </div>
        </div>
      </Container>
    </div>
        </div>
    );
};

export default Environment;