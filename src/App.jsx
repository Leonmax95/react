import './App.css'
import ItemListContainer from './componentes/header/ItemListContainer'
import Header from './componentes/header/Header'

function App() {
    

    return (
        <div>
            <Header />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
        </div>
    );
}

export default App
