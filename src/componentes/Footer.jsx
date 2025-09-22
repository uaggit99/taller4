import { useState } from "react";
function Footer() {

  const [year] = useState(new Date().getFullYear());

  return (
    <>
      <footer className="footer">
        <p>
          Copyrigth © {year} Uberney Acero Gomez. Todos los derechos reservados.
        </p>
        <p>Colsubsidio - Universidad de los Andes - React</p>
      </footer>
    </>
  );
}

export default Footer;
