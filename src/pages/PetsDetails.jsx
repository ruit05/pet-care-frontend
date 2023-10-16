import { useParams } from "react-router-dom";
import { getPetById, createOrUpdatePet } from "../services/main/pets"
import { useEffect, useState } from "react";

export function PetsDetails() {
    const { id } = useParams();
    const [pet, setPet] = useState({})

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

    const editPet = (e) => {
        e.preventDefault();
        pet.name = e.target.name.value
        pet.dateOfBirth = e.target.dob.value
        pet.breed = e.target.breed.value
        console.log(pet)
        createOrUpdatePet(pet);
    }

    return (
        <>
            <div className="container mx-auto w-3/4 px-4">
                <div className="flex my-8 justify-end w-full">
                    <button className="btn btn-outline btn-info">Change to details</button>
                </div>
                <div className="overflow-x-auto">
                    <form
                        className="border  border-gray-600 bg-base-200 rounded"
                        onSubmit={editPet}>
                        <h1 className="px-4 py-2 text-xl font-bold">Pets form</h1>
                        <div className="px-4 py-2">
                            <label className="label">
                                <span className="label-text">Pet name</span>
                            </label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" defaultValue={pet.name} />
                        </div>
                        <div className="px-4 py-2">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input type="date" name="dob" placeholder="Type here" className="input input-bordered w-full" defaultValue={pet.dateOfBirth} />
                        </div>
                        <div className="px-4 py-2">
                            <label className="label">
                                <span className="label-text">Breed</span>
                            </label>
                            <input type="text" name="breed" placeholder="Type here" className="input input-bordered w-full" defaultValue={pet.breed} />
                        </div>
                        <div className="px-4 py-4">
                            <button type="submit" className="btn btn-outline btn-info w-full">Edit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}