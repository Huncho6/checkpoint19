import './App.css' //importing app.css into App.tsx
import Footer from './footer'; //importing Footer into App.tsx
import Header from './Header'; //importing header into App.tsx
import AlbumComponent from './AlbumComponent';
import AlbumCard from './AlbumCard';
//A template for the app where we call every component
const App = () => {

  return (
    <>
      <Header />
      <AlbumCard />
      <AlbumComponent />
      <Footer />
    </>
  )

}

export default App;
