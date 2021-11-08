import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import { Style } from "./style";

function RatingMovie() {
    return (
        <Style>
            <ReactStars
                count={5}
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