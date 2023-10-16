export function ShowPetDetails(props) {

    return (
        <div class="flex flex-col w-full">
            <label className="label">
                <span className="label-text text-info">Pet name</span>
            </label>
            <div class="grid mb-4 border border-gray-600 h-20 card bg-base-300 rounded-box place-items-center font-bold">{props.pet.name}</div>
            <div class="divider"></div>
            <label className="label">
                <span className="label-text text-info">Date of birth</span>
            </label>
            <div class="grid mb-4 border border-gray-600 h-20 card bg-base-300 rounded-box place-items-center font-bold">{props.pet.dateOfBirth}</div>
            <div class="divider"></div>
            <label className="label">
                <span className="label-text text-info">Breed</span>
            </label>
            <div class="grid mb-4 border border-gray-600 h-20 card bg-base-300 rounded-box place-items-center font-bold">{props.pet.breed}</div>
        </div>
    )
}