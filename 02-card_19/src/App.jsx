import './App.css'
import Card from './Componet/Card.jsx'
import Cards from "./Cards.json"

function App() {
  return (

    <section className="card">
      <div className="container">
        <div className="row">
          {Cards.map((Cards) => {
            return <Card item={Cards} />
          }
          )
          }
        </div>
      </div>
    </section>

  )
}

export default App
