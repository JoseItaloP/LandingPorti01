import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube  } from "react-icons/fa";



const Contato = () => {
  return (
    <div className="contato" id="contato">
      <section className="FooterSec">
        <h2 className="ContaF">Como contatar você?</h2>
        <div className="DivBox simpleAnimation">
          <div className="divBoxFooter1">
            <ul className="listCont1">
              <li><span>Email</span>: <a href="#">Email@Email.com</a></li>
              <br/>
              <li><span>Phone</span>: <a href="#">00-0000-0000</a></li>
              <br/>
              <li><span>Endereço</span>: <a href="#">Cidade.Estado.Rua</a></li>
            </ul>
          </div>
          <div className="divBoxFooter2">
            <ul className="listCont2">
              <li className="IconFace"><FaFacebookF size={20}/></li>
              <li className="IconInst"><FaInstagram size={20}/></li>
              <li className="IconYou"><FaYoutube size={20}/></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
