export function PetForm(props) {

    return (
        <div className="overflow-x-auto">
            <form
                className="border  border-gray-600 bg-base-200 rounded"
                onSubmit={props.apiCall}>
                <h1 className="px-4 py-2 text-xl font-bold">Pets form</h1>
                <div className="px-4 py-2">
                    <label className="label">
                        <span className="label-text">Pet name</span>
                    </label>
                    <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" defaultValue={props.pet.name} />
                </div>
                <div className="px-4 py-2">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <input type="date" name="dob" placeholder="Type here" className="input input-bordered w-full" defaultValue={props.pet.dateOfBirth} />
                </div>
                <div className="px-4 py-2">
                    <label className="label">
                        <span className="label-text">Breed</span>
                    </label>
                    <input type="text" name="breed" placeholder="Type here" className="input input-bordered w-full" defaultValue={props.pet.breed} />
                </div>
                <div className="px-4 py-4">
                    <button type="submit" className="btn btn-outline btn-info w-full">Edit</button>
                </div>

            </form>
        </div>
    );
}