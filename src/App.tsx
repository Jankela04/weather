import { useEffect } from "react";
import axios from "axios";
function App() {
    const API_KEY = "17c9212f81fe4ad699174506221609";

    const func = async () => {
        const res = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Temerin`
        );
        console.log(res.data);
    };

    useEffect(() => {
        func();
    }, []);
    return <div className="App">Yo</div>;
}

export default App;
