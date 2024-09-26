import { useState } from "react"
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";


const Header = () => {
     const [click, setClick] = useState(false)

     const hamdleClick = () =>setClick(!click)
  return (
        <header className="header">
            <section className="LogIcon">
                <div className="logo">
                        Logo
                </div>
                <nav className={click ? "listActive" : "list"}>
                            <a href="#home" onClick={hamdleClick} className="linkB">Home</a>
                            <a href="#sobre" onClick={hamdleClick} className="linkB">Sobre</a>
                            <a href="#projetos" onClick={hamdleClick} className="linkB">Projetos</a>
                            <a href="#contato" onClick={hamdleClick} className="linkB">Contato</a>
                </nav>
            </section>
            <div className="Icon" onClick={hamdleClick}>
                {
                    click ? <IoMdClose className="closeIcon" /> : <HiBars3 />
                }
            </div>
    </header>
  )
}

export default Header
