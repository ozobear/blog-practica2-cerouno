import React from 'react';
import Navbar from './components/Navbar';
import FeauturedCard from './components/FeauturedCard';
import PostsContent from './components/PostsContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <FeauturedCard
      title="Te presentamos el cartel de NRMAL 2020"
      imgUrl="https://indierocks.b-cdn.net/wp-content/uploads/2020/02/nrmal-2020cartel.jpg"
      extract="Monterrey fue quien vio nacer a este (no tan) gran festival y 11 años después tenemos Nrmal para rato..."
      author="Ozobear"
      date="06 de Febrero 2020"
      category="Música"
      />
      <hr></hr>
      <div>
        <h4 className="category-name">Música</h4>
        <div className="posts">
        <PostsContent 
        imgUrl="https://i1.wp.com/marvin.com.mx/wp-content/uploads/2020/02/carino-en-mexico.jpg"
        title="Cariño visita México por primera vez"
        extract="El trío indie de españolas vienen por primera vez a la capital mexicana y no te puedes..."
        author="Oscar"
        date="07 de Febrero 2020"
        />
        <PostsContent 
        imgUrl="https://i2.wp.com/marvin.com.mx/wp-content/uploads/2020/02/king-krule-alone-omen-3-video.jpg"
        title="King Krule lanza video para la canción Alone Omen 3"
        extract="Dos años después de su último disco que catapultó a la fama a Archy Marshal, vuelve con un sencillo para..."
        author="Ozobear"
        date="07 de Febrero 2020"
        />
        <PostsContent 
        imgUrl="https://i1.wp.com/marvin.com.mx/wp-content/uploads/2020/02/nos-primavera-sound-porto-2020.jpg"
        title="El NOS Primavera Sound 2020 ya tiene cartel y acá puedes verlo"
        extract="Primavera Sound siempre nos ha sorprendido con carteles de talla internacional y esta edición para su sede en Portugal..."
        author="Oscar"
        date="07 de Febrero 2020"
        />
        </div>
      </div>
      <div>
        <h4 className="category-name">Arte</h4>
        <div className="posts">
        <PostsContent 
        imgUrl="https://i1.wp.com/marvin.com.mx/wp-content/uploads/2020/02/carino-en-mexico.jpg"
        title="Cariño visita México por primera vez"
        extract="El trío indie de españolas vienen por primera vez a la capital mexicana y no te puedes..."
        author="Oscar"
        date="07 de Febrero 2020"
        />
        <PostsContent 
        imgUrl="https://i2.wp.com/marvin.com.mx/wp-content/uploads/2020/02/king-krule-alone-omen-3-video.jpg"
        title="King Krule lanza video para la canción Alone Omen 3"
        extract="Dos años después de su último disco que catapultó a la fama a Archy Marshal, vuelve con un sencillo para..."
        author="Ozobear"
        date="07 de Febrero 2020"
        />
        <PostsContent 
        imgUrl="https://i1.wp.com/marvin.com.mx/wp-content/uploads/2020/02/nos-primavera-sound-porto-2020.jpg"
        title="El NOS Primavera Sound 2020 ya tiene cartel y acá puedes verlo"
        extract="Primavera Sound siempre nos ha sorprendido con carteles de talla internacional y esta edición para su sede en Portugal..."
        author="Oscar"
        date="07 de Febrero 2020"
        />
        </div>
      </div>
      <div>
        <h4 className="category-name">Cine</h4>
        <div className="posts">
        <PostsContent 
        imgUrl="https://i1.wp.com/marvin.com.mx/wp-content/uploads/2020/02/carino-en-mexico.jpg"
        title="Cariño visita México por primera vez"
        extract="El trío indie de españolas vienen por primera vez a la capital mexicana y no te puedes..."
        author="Oscar"
        date="07 de Febrero 2020"
        />
        <PostsContent 
        imgUrl="https://i2.wp.com/marvin.com.mx/wp-content/uploads/2020/02/king-krule-alone-omen-3-video.jpg"
        title="King Krule lanza video para la canción Alone Omen 3"
        extract="Dos años después de su último disco que catapultó a la fama a Archy Marshal, vuelve con un sencillo para..."
        author="Ozobear"
        date="07 de Febrero 2020"
        />
        <PostsContent 
        imgUrl="https://i1.wp.com/marvin.com.mx/wp-content/uploads/2020/02/nos-primavera-sound-porto-2020.jpg"
        title="El NOS Primavera Sound 2020 ya tiene cartel y acá puedes verlo"
        extract="Primavera Sound siempre nos ha sorprendido con carteles de talla internacional y esta edición para su sede en Portugal..."
        author="Oscar"
        date="07 de Febrero 2020"
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
