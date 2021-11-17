import PropTypes from 'prop-types';

function Loading(props) {
    const { isLoading, width } = props;

    return (
        <div className="my-4" style={{ 'display': isLoading ? 'block' : 'none' }}>
            <div className="d-flex justify-content-center align-items-center text-center">
                <div className="spinner-border" style={{ 'width': width ? width : '3rem', 'height': width ? width : '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>

    )
}
Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    width: PropTypes.string,
};
export default Loading;