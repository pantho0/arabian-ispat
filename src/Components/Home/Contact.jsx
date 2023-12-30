import Container from "../Utils/Container";


const Contact = () => {
    return (
        <div className="mt-20 mb-20">
            <h2 className="text-blue-600 text-4xl text-center">Get in Touch with Us</h2>
            <Container>
                <div className="flex gap-4 w-1/2 mx-auto mt-8">
                <input type="text" placeholder="Your Name" className="input input-bordered input-info border-blue-600  w-full max-w-xs rounded-none" />
                <input type="text" placeholder="Your Email" className="input input-bordered input-info border-blue-600  w-full max-w-xs rounded-none" />
                </div>
                <div className="w-1/2 mx-auto mt-8 ">
                <textarea className="textarea textarea-info w-full rounded-none" placeholder="Your Message"></textarea>
                </div>
                <div className="w-1/2 mx-auto text-center mt-8">
                   <button className="btn btn-outline text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600 w-1/2 rounded-none">Send Message</button> 
                </div>
                
            </Container>
        </div>
    );
};

export default Contact;