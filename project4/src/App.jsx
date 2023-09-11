import Footer from "./components/Footer"
import Header from "./components/Header"
import Note from "./components/Note"
import notes from "./components/notes.js"
import CreateArea from "./components/CreateArea";


function App() { 

  return (
    <>
    <Header />
    <CreateArea/>
    {notes.map(  (noteItem)=> <Note key= {noteItem.key} title= {noteItem.title} content= {noteItem.content}/>
  )}
    <Footer/>
    </>
  )
}

export default App;
