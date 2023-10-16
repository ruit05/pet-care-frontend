import { redirect, useParams } from "react-router-dom";
import { getPetById, createOrUpdatePet } from "../services/main/pets"
import { useEffect, useState } from "react";
import { PetForm } from "../components/PetForm";
import { ShowPetDetails } from "../components/showPetDetails";

export function PetsDetails() {
    const { id } = useParams();
    const [pet, setPet] = useState({})
    const [isEditing, setIsEditing] = useState(true)

    {
        id !== 'create' &&
            useEffect(() => {
                const abortController = new AbortController();

                async function getPetByIdAsync() {
                    const pet = await getPetById(id)
                    setPet(pet)
                    console.log(pet)
                }

                getPetByIdAsync()

                return () => {
                    abortController.abort();
                };
            }, []);
    }

    const editPet = (e) => {
        e.preventDefault();
        pet.name = e.target.name.value
        pet.dateOfBirth = e.target.dob.value
        pet.breed = e.target.breed.value
        console.log(pet)
        createOrUpdatePet(pet)
            .then(() => { redirect("/") });
    }

    const addPet = (e) => {
        e.preventDefault();
        const pet = {
            name: e.target.name.value,
            dateOfBirth: e.target.dob.value,
            breed: e.target.breed.value
        }
        console.log(pet)
        createOrUpdatePet(pet)
            .then(() => { redirect("/") });
    }

    return (
        <>
            <div className="container mx-auto w-3/4 px-4">
                <div className="flex my-8 justify-between w-full">
                    <h1 className="text-3xl font-bold">{id === 'create' ? 'Add Pet' : 'Edit Pet'}</h1>
                    <button
                        className="btn btn-outline btn-info"
                        disabled={id == 'create'}
                        onClick={() => setIsEditing(!isEditing)}> {isEditing ? 'Change to details' : 'Edit pet'}</button>
                </div>
                {
                    isEditing ? <PetForm apiCall={id === 'create' ? addPet : editPet} pet={pet} /> :
                        <ShowPetDetails pet={pet} />
                }
            </div>
        </>
    );
}