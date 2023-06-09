import { dataUser } from "./data"

export const List = () => {

    return (
        <div>
            <table>
                <tr>
                    <th>No. </th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                </tr>
                { dataUser.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                }) }
            </table>
        </div>
    )
}