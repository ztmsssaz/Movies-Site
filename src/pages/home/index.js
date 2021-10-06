import { MiniSlider, MainSlider } from '../../components/sliders';
import Style from "./style";
function renderFarm() {
    let array = [1, 1, 1, 1, 1, 1, 1, 1];
    return (
        array.map((element, index) => {
            return (
                <div key={index} className="categorySliders px-4">
                    <h3 className="py-2">Category 1</h3>
                    <MiniSlider />
                </div>
            )
        })
    )


}
function Home() {
    return (
        <Style>
            <div className="topSection">
                <div className="mainSlider container">
                    <MainSlider />
                </div>
            </div>
            <div className="miniSliders">
                {renderFarm()}
            </div>
        </Style>
    )
}
export default Home;