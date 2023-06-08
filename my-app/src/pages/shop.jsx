import { useParams } from "react-router-dom"

function Shop() {
    const params = useParams()
    return(
        <div>
            <h1>Ini Toko dengan Id {params.id}</h1>
        </div>
    )
}

export default Shop