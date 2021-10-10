function Loader() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-grow" style={{ width: '2rem', height: '2rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" style={{ width: '2rem', height: '2rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader; 