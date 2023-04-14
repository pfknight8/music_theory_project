import { CSSTester } from "../components/cssTester"
import "../styles/Home.css"

const Home = () => {

  return (
    <section id="Home-page">
      <p>Home page rendered. This will ultimately be a landing page, other pages will be constructed to hold the different types of components.</p>
      <CSSTester />
    </section>
  )
}

export default Home