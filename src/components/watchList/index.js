import { useEffect } from "react";
import { postRequest } from '../../api';

function WatchList(props) {

    useEffect(() => {

    }, [])

    function addToWatchList(params) {
        postRequest()
            .then((res) => {
                console.log(res);
            })
    }
    function removeFromWatchList(params) {

    }
    return (
        <p>0</p>
    )
}
export default WatchList;