import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Primary } from "./pages/Primary"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Primary/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
