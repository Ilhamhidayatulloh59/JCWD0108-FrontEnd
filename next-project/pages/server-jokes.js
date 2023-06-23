export async function getServerSideProps() {
    const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart&idrange=0-10&amount=5"
    )
    const { jokes } = await response.json()
    return {
        props: { data: jokes }
    }
}

const ServerJokes = ({ data }) => {
    return (
        <main>
            <h1>Here are some Jokes</h1>
            <ul>
                {data?.map(joke => {
                    return (
                        <li key={joke.id}>
                            {joke.id}. {joke.setup} - {joke.delivery}
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default ServerJokes