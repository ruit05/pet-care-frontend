export function Pets() {
    return (
        <div className="container mx-auto w-3/4 px-4">
            <div className="flex my-8 justify-between w-full">
                <input type="text" placeholder="Search for pet" className="input input-bordered input-warning w-full max-w-xs" />
                <button class="btn btn-outline btn-warning">Add pet</button>
            </div>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pet name</th>
                            <th>Breed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td className="flex flex-col md:flex-row gap-2">
                                <button class="btn btn-outline btn-warning">List details</button>
                                <button class="btn btn-outline btn-error">Delete pet</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}