import { PetRow } from "./PetRow";

export function PetList(props) {

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pet name</th>
                        <th>Breed</th>
                        <th className="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filteredPets.map((pet, index) => (
                        <PetRow key={index} pet={pet} index={index} deletePet={props.deletePet} navigate={props.navigate} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}