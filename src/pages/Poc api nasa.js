useEffect(() => {
        const queryString = new URLSearchParams({ ...params, api_key: API_KEY }).toString()
        const url = `${ENDPOINT}?${queryString}`

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setData(result)
            })
            .catch((err) => console.error("Error:", err))
    }, [])
import { useEffect, useState } from "react";
function Preview() {
    const [data, setData] = useState(null)
    const API_KEY = "nnB71VuMcgMOH5ya1W8gHwa1MuGB4K9gCCFipp4O" 
    const ENDPOINT = "https://api.nasa.gov/planetary/apod"
    const params = {
        date: "2024-01-01", 
    }

    useEffect(() => {
        const queryString = new URLSearchParams({ ...params, api_key: API_KEY }).toString()
        const url = `${ENDPOINT}?${queryString}`
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setData(result)
            })
            .catch((err) => console.error("Error:", err))
    }, [])

    if (!data) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2>{data.title}</h2>
            <img src={data.url} width="200" />
            <p>{data.explanation}</p>
        </div>
    )
}
export default Preview