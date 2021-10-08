function Loading(props) {
    const { isLoading, width } = props;

    return (
        <div style={{ 'display': isLoading ? 'block' : 'none' }}>
            <div className="d-flex justify-content-center align-items-center text-center">
                <div className="spinner-border" style={{ 'width': width ? width : '3rem', 'height': width ? width : '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>

    )
}
export default Loading;