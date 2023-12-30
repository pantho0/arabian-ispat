import Qbg from "../../assets/images/qualitybg.jpg"

const QualityAssurance = () => {
  return (
    <div>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            `url(${Qbg})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Excellence in Steel Supply</h1>
            <p className="mb-5">
            Our steadfast commitment to quality service is reflected in our contribution to major regional construction projects. With seasoned expertise in estimating, detailing, and fabrication, we possess the capability to seamlessly manage projects of any scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
