import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export function Pets(props) {
    const [filteredPets, setFilteredPets] = useState(props.pets || [])

    useEffect(() => {
        if (props.pets) {
            setFilteredPets(props.pets);
        }
    }, [props.pets]);

    const petSearch = (e) => {
        console.log(e.target.value)
        console.log(filteredPets)
        e.target.value === '' ? setFilteredPets(props.pets) :
            setFilteredPets(props.pets.filter((pet) => {
                return pet.name.toLowerCase().startsWith(e.target.value.toLowerCase());
            }))
    }

    return (
        <div className="container mx-auto w-3/4 px-4">
            <div className="flex my-8 justify-between w-full">
                <input type="text" placeholder="Search for pet" className="input input-bordered input-warning w-full max-w-xs" onChange={(e) => petSearch(e)} />
                <button className="btn btn-outline btn-warning">Add pet</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pet name</th>
                            <th>Breed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPets.map((pet, index) => (
                            <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{pet.name}</td>
                                <td>{pet.breed}</td>
                                <td className="flex flex-col md:flex-row gap-2">
                                    <Link
                                        className="btn btn-outline btn-warning"
                                        to={`/${pet.id}`}
                                    >List details</Link>
                                    <button className="btn btn-outline btn-error">Delete pet</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}