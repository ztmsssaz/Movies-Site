import PropTypes from 'prop-types';
import './style';

const YoutubeEmbed = ({ embedId, height = 480 }) => (
    <div className="video-responsive">
        <iframe
            width="100%"
            height={height}
            src={`https://www.youtube.com/embed/${embedId}`}
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
    height: PropTypes.number
};

export default YoutubeEmbed;