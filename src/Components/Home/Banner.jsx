
import BannerImage from "../../assets/images/banner.jpg"
const Banner = () => {
    return (
        <div
        className="hero min-h-[75vh]"
        style={{
          backgroundImage:
            `url(${BannerImage})`,
            objectFit:"cover"
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="text-[30px] md:text-8xl mb-5 font-bold">Arabian Ispat LTD.</h1>
            <p className="text-[20px] md:text-4xl mb-5">
            Building Dreams, Always in Support
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;