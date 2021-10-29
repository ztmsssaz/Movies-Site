import { postRequest } from '../../api';
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import { Style } from "./style";

function RatingMovie(props) {
    const { movieId } = props;

    function rateMovie(value) {
        postRequest(`/movie/${movieId}/rating`, { value })
            .then((res) => {
                console.log(res);
            });
        console.log(value);
    }
    return (
        <Style>
            <ReactStars
                count={5}
                onChange={rateMovie}
                size={20}
                isHalf={true}
                emptyIcon={<FontAwesomeIcon icon={faStar} />}
                halfIcon={<FontAwesomeIcon icon={faStarHalfAlt} />}
                filledIcon={<FontAwesomeIcon icon={faStar} />}
                activeColor="#ffe000"
            />
        </Style>
    )
}
export default RatingMovie;