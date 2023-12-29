import AboutBg from "../../assets/images/aboutbg.jpg";
import ImgAbout from "../../assets/images/imgabout.jpg";

const AboutUs = () => {
  return (
    <div className="mt-10">
      <div
        className="hero min-h-[65vh]"
        style={{
          backgroundImage: `url(${AboutBg})`,
          objectFit: "cover",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-justify text-neutral-content">
          <section class="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div>
              <img
                style={{
                    objectFit: "cover",
                  }}
                src={ImgAbout}
                alt="3 women looking at a laptop"
                class="object-cover w-full h-64 bg-gray-100 md:h-full"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
              <span class="mb-3 text-white bg-[#017C9D] badge p-4">The Story</span>
              <h1 class="mb-6 text-4xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
               About Us
              </h1>

              <p class="pr-0 mb-4 text-base text-gray-300 tracking-relaxed lg:pr-16">
              Welcome to Arabian Ispat Ltd, where our dedication to excellence in steel production is embodied in every MS rod we craft. As a leading entity in the industry, we take pride in our commitment to quality, innovation, and customer satisfaction. With a dynamic team of professionals, we have established ourselves as a trusted name in the market. At Arabian Ispat Ltd, our focus on precision manufacturing ensures that each MS rod meets the highest standards of strength and durability. Our journey is rooted in a passion for engineering and a vision to redefine the landscape of steel production. Explore the core of our business, where our expertise in iron-making, meticulous manufacturing processes, and dedication to welding services converge to create MS rods that set industry benchmarks. Thank you for choosing Arabian Ispat Ltd as your trusted partner in quality steel solutions.
              </p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
