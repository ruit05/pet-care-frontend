import { Link } from "react-router-dom";

export function PetRow(props) {

    return (
        <tr className="hover">
            <th>{props.index + 1}</th>
            <td>{props.pet.name}</td>
            <td>{props.pet.breed}</td>
            <td className="flex flex-col md:flex-row gap-2 justify-end">
                <Link
                    className="btn btn-outline btn-warning"
                    to={`/${props.pet.id}`}
                >List details</Link>
                <button onClick={() => { props.deletePet(props.pet.id); props.navigate(0) }} className="btn btn-outline btn-error">Delete pet</button>
            </td>
        </tr>
    );
}