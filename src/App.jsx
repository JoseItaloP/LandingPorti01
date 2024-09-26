import './App.css'
import Home from './Components/Home.jsx'
import Sobre from './Components/Sobre.jsx'
import Projetos from './Components/Projetos.jsx'
import Contato from './Components/Contato.jsx'
import Header from './Components/Header.jsx'


function App() {

  return (
    <>
      <section className='Seed'>
        <Header/>
        <main >
          <Home />
          <Sobre />
          <Projetos />
        </main>
        <footer>
          <Contato />
        </footer>
      </section>
    </>
  )
}

export default App
