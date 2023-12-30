import AboutBg from "../../assets/images/aboutbg.jpg";
import ImgAbout from "../../assets/images/imgabout.jpg";

const AboutUs = () => {
  return (
    <div className="mt-10">
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(${AboutBg})`,
          objectFit: "cover",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-justify text-neutral-content">
          <section className="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div>
              <img
                style={{
                    objectFit: "cover",
                  }}
                src={ImgAbout}
                alt="3 women looking at a laptop"
                className="object-cover w-full h-64 bg-gray-100 md:h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
              <span className="mb-3 text-white bg-blue-600 badge p-4">The Story</span>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
               About Us
              </h1>

              <p className="pr-0 mb-4 text-base text-gray-300 tracking-relaxed lg:pr-16">
              Welcome to Arabian Ispat Ltd, where our commitment to steel excellence shines in every MS rod we produce. As industry leaders, we pride ourselves on quality, innovation, and customer satisfaction. With a dynamic team, we've earned trust in the market. Our precision manufacturing ensures each MS rod meets the highest standards of strength. Rooted in a passion for engineering, our journey aims to redefine steel production. Explore our core, where iron-making, meticulous processes, and dedication to welding converge, creating industry benchmark MS rods. Thank you for choosing Arabian Ispat Ltd as your trusted partner in quality steel solutions.
              </p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
