import SobreV from "../../public/SobreV.jpg";

const Sobre = () => {
  return (
    <article className="sobre simpleAnimation" id="sobre">
      <figure className="ImgPSobre">
        <img src={SobreV} alt="" className="SobreImg" />
        <span className="PSobre simpleAnimation">
          <h3>Sobre você.</h3>
          <p>
            Fale sobre sua empresa, seu negócio, seus objetivos com o cliente e
            o que você quer entregar ele com segurança.
          </p>
        </span>
      </figure>
    </article>
  );
};

export default Sobre;
