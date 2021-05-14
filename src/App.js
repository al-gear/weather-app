
import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./HavaDurumu";

const App = () => {
    const [weather, setWeather] = useState()

    const city = prompt("bir sehir giriniz")
    const getWeather = async () => {

        const key = process.env.REACT_APP_WHEATHER_API_KEY
        const lang = navigator.language.split("-")[0]


        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}&units=metric
        `)

            setWeather(data)
        } catch (error) {
            alert("veri alınırken bir hata oluştu")
        }
    }

    useEffect(() => {
        getWeather()
    }, [])


    return (<>
        <h1 style={{ textAlign: "center", color: "blue" }} >Hava Durumu</h1>
        <HavaDurumu weather={weather} />
    </>
    )
}

export default App;