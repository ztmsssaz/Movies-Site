import Style from "./style";

function Loader() {
    return (
        <Style>
            <div className="loader d-flex align-items-center justify-content-center vh-100">
                <div className="spinner-grow mx-1" style={{ width: '2rem', height: '2rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-1" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-1" style={{ width: '2rem', height: '2rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </Style>
    )
}

export default Loader; 