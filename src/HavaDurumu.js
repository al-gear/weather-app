
const HavaDurumu = (props) => {

    const { weather } = props;
    if (!weather) {
        return <h2>Yükleniyor...</h2>
    }
    return (<>
        <h2>{weather.name}</h2>
        <h3>{weather.weather.map(data => data.description).join(", ")}</h3>
        <p>{weather.main.temp} °C</p>
        <p>{new Date(weather.dt * 1000).toLocaleDateString()} </p>
    </>
    )
}

export default HavaDurumu;