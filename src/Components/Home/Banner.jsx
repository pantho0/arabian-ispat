
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
            <h1 className="mb-5 text-8xl font-bold">Arabian Ispat LTD.</h1>
            <p className="mb-5 text-4xl">
            Building Dreams, Always in Support
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;