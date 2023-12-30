import CurrentYear from "../Utils/CurrentYear";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
      <aside>
        <CurrentYear/>
      </aside>
    </footer>
  );
};

export default Footer;
