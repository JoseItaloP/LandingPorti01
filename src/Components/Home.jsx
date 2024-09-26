
import HomePageImg from "../../public/HomePageImg.jpg"

const Home = () => {
  return (
    <section id="home" className="home">
      <section className="imgTextHome">
        <img src={HomePageImg} alt="" className="imgHome"/>
        <div className="HomeBox">
          <h1 className="HomeP">Objetivo do seu serviço em uma frase cativante</h1>
          <p className="HomeT">Qual seu principal tipo de serviço? Algo que atraia o cliente.Que o convença com uma leitura rápida e direta</p>
        </div>
      </section>
    </section>
  )
}

export default Home
