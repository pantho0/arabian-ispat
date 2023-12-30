import React from "react";
import Container from "../Utils/Container";
import { GiSmallFire } from "react-icons/gi";
import { GiPizzaCutter } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import { GiArmorUpgrade } from "react-icons/gi";



const Features = () => {
  return (
    <div className="bg-gray-300">
      <Container>
        <div className="flex gap-2">
        {/* Card-1 */}
        <div className="card w-96">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-blue-600 rounded-full p-4">
           <GiSmallFire/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">High Strength & Durability</h2>
            <p> Ensure enduring support in construction with these strength-prized bars, resilient against heavy loads.</p>
          </div>
        </div>
        {/* Card-2 */}
        <div className="card w-96">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-blue-600 rounded-full p-4">
           <GiPizzaCutter/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Versatile Fabrication</h2>
            <p> Easily cut and shaped, these bars offer unmatched versatility, seamlessly adapting to diverse construction needs.</p>
          </div>
        </div>
        {/* Card-3 */}
        <div className="card w-96">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-blue-600 rounded-full p-4">
           <TbManualGearbox/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Weldability for Integrity</h2>
            <p> Excel in weldability, ensuring secure connections for structural integrity in buildings, bridges, and industrial structures</p>
          </div>
        </div>
        {/* Card-4 */}
        <div className="card w-96">
          <figure className="px-10 pt-10 text-6xl text-white">
           <div className="bg-blue-600 rounded-full p-4">
           <GiArmorUpgrade/>
           </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Durable Defense</h2>
            <p> Treated for corrosion resistance through galvanization, these bars thrive in diverse outdoor and corrosive conditions, extending their lifespan.</p>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
