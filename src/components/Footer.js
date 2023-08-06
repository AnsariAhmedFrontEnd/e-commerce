const Footer = (props) => {
  return (
    <footer>
    <div
      className="d-flex justify-content-between p-4 w-100"
      style={{ backgroundColor: "cyan" }}
    >
      <div>
        <h2>The Generics</h2>
      </div>
      <div className="d-flex" style={{ listStyle: "none" }}>
        <li className="mx-4">Youttube</li>
        <li className="mx-4">Youttube</li>
        <li className="mx-4">Youttube</li>
      </div>
    </div>
  </footer>
  );
};

export default Footer;