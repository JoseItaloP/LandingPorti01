import { BsAirplaneEnginesFill, BsBasket2Fill, BsBoomboxFill   } from "react-icons/bs";

const Projetos = () => {
  return (
    <article className="Projetos" id="projetos">
     <h2>Os tipo de serviços que voce oferece.</h2>
     <section className="SerBox">
      <ul className="SerGridList simpleAnimation">
        <li>
          <BsAirplaneEnginesFill size={30}/>
          <h3>Serviço 1</h3>
          <div>A descrição do seu serviço.</div>
        </li>
        <li>
          <BsBasket2Fill  size={30}/>
          <h3>Serviço 2</h3>
          <div>A descrição do seu serviço.</div>
          </li>
        <li>
          <BsBoomboxFill size={30}/>
          <h3>Serviço 3</h3>
          <div>A descrição do seu serviço.</div>
          </li>
      </ul>
     </section>
    </article>
  )
}

export default Projetos
