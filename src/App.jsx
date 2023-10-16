import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createOrUpdatePet, deletePet, getAllPets, getPetById } from "./services/main/pets"
import { Pets } from "./pages/pets";
import { PetsDetails } from './pages/PetsDetails'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const abortController = new AbortController();

    async function getAllPetsAsync() {
      const allPets = await getAllPets()

      setPets(allPets)
    }

    getAllPetsAsync();

    return () => {
      abortController.abort();
    };
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={() => <Pets pets={pets} deletePet={deletePet} />} />
          <Route path="/:id" Component={() => <PetsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
