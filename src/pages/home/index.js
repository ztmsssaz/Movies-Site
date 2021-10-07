import { MiniSlider, MainSlider } from '../../components/sliders';
import { getRequest } from '../../api';
import Style from "./style";
import { useEffect, useState } from 'react';
import get from 'lodash/get';

function renderFarm() {
    let array = [1, 1, 1, 1, 1, 1, 1, 1];
    return (
        array.map((element, index) => {
            return (
                <div key={index} className="categorySliders px-4">
                    <h3 className="py-2">Category {index}</h3>
                    <MiniSlider />
                </div>
            )
        })
    )
}
function Home() {
    const [data, setMovies] = useState([]);
    const results = get(data, 'results', []);
    useEffect(() => {
        getRequest('/movie/popular')
            .then(response => {
                setMovies(response.data);
            })
    }, [])
    return (
        <Style>
            <div className="topSection">
                <div className="mainSlider container">
                    <MainSlider data={results} />
                </div>
            </div>
            <div className="miniSliders">
                {renderFarm()}
            </div>
        </Style>
    )
}
export default Home;