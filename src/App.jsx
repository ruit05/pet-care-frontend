import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createOrUpdatePet, deletePet, getAllPets, getPetById } from "./services/main/pets"
import { Pets } from "./pages/pets";

function App() {
  const [pets, setPets] = useState([])

  // useEffect(() => {
  //   //Permitir cancelar um pedido ao servidor
  //   const abortController = new AbortController();

  //   async function test() {
  //     const data = {
  //       name: "Bobby",
  //       dateOfBirth: "2019-01-01",
  //       breed: "Bulldog",
  //     }

  //     const petCreated = await createOrUpdatePet(data)

  //     console.log(petCreated)

  //     const allPets = await getAllPets()

  //     console.log(allPets)

  //     petCreated.name = "Fisher"
  //     const petUpdated = await createOrUpdatePet(petCreated)

  //     console.log(petUpdated)

  //     const pet = await getPetById(petUpdated.id)

  //     console.log(pet)

  //     await deletePet(petUpdated.id)

  //     const allPetsAfterDelete = await getAllPets()

  //     console.log(allPetsAfterDelete)

  //   }

  //   test()

  //   return () => {
  //     //Cancelar o pedido caso o componente seja desmontado
  //     abortController.abort();
  //   };
  // }, [])

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
      <Pets pets={pets} />
    </>
  )
}

export default App
