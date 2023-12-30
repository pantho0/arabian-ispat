import CurrentYear from "../Utils/CurrentYear";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-blue-600 text-white">
      <aside>
        <CurrentYear/>
      </aside>
    </footer>
  );
};

export default Footer;
