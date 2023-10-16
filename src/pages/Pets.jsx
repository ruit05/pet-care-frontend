import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { PetList } from "../components/PetList";

export function Pets(props) {
    const navigate = useNavigate();
    const [filteredPets, setFilteredPets] = useState(props.pets || [])

    useEffect(() => {
        if (props.pets) {
            setFilteredPets(props.pets);
        }
    }, [props.pets]);

    const petSearch = (e) => {
        e.target.value === '' ? setFilteredPets(props.pets) :
            setFilteredPets(props.pets.filter((pet) => {
                return pet.name.toLowerCase().startsWith(e.target.value.toLowerCase());
            }))
    }

    return (
        <div className="container mx-auto w-3/4 px-4">
            <div className="flex my-8 justify-between w-full">
                <input type="text" placeholder="Search for pet" className="input input-bordered input-warning w-full max-w-xs" onChange={(e) => petSearch(e)} />
                <Link to={`/create`} className="btn btn-outline btn-warning">Add pet</Link>
            </div>

            <PetList filteredPets={filteredPets} deletePet={props.deletePet} navigate={navigate} />
        </div>
    )
}