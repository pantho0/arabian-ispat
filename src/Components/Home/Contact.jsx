import Container from "../Utils/Container";

const Contact = () => {
  return (
    <div className="mt-20">
      <h2 className="text-blue-600 text-4xl text-center">
        Get in Touch with Us
      </h2>
      <Container>
        <div className="flex gap-4 w-1/2 mx-auto mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-info border-blue-600  w-full max-w-xs rounded-none"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-info border-blue-600  w-full max-w-xs rounded-none"
          />
        </div>
        <div className="w-1/2 mx-auto mt-8 ">
          <textarea
            className="textarea textarea-info w-full rounded-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="w-1/2 mx-auto text-center mt-8">
          <button className="btn btn-outline text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600 w-1/2 rounded-none">
            Send Message
          </button>
        </div>
      </Container>
      <div className="mt-20">
      <div style={{ width: '100%' }}>
  <iframe
    title="Arabian Ispat Location"
    width="100%"
    height="400"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Arabian%20Ispat,%203D,%20Kabbakash%20Market,%20Kawran%20Bazar,%20Dhaka+(ARABIAN%20ISPAT%20LTD.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    <a href="https://www.maps.ie/population/">Population mapping</a>
  </iframe>
</div>

      </div>
    </div>
  );
};

export default Contact;
