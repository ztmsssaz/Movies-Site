import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from 'api';
import { posterBaseUrl } from "constant";
import { defaultImage } from 'helpers';
import MiniSlider from 'components/sliders/miniSlider';

import Style from "./style";

function Person() {
    const { id } = useParams();
    const [personInfo, setPersonInfo] = useState({});
    const [personMovies, setPersonMovies] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getRequest(`/person/${id}`)
            .then(response => {
                setPersonInfo(response.data);
            })
        getRequest(`/person/${id}/combined_credits`)
            .then(response => {
                setPersonMovies(response.data.cast);
            })
    }, [id]);

    function renderFarm() {
        return (
            <div className="backgroundDrop py-md-5">
                <div className="container">
                    <div className="d-flex justify-content-start align-items-start flex-wrap flex-md-nowrap py-4 px-1">
                        <div className="col-12 col-md-3 col-xl-2">
                            <div>
                                <img className="actImage posterPathBackground rounded-3 mx-auto" src={`${posterBaseUrl}${personInfo.profile_path}`} onError={defaultImage} alt="ok" />
                            </div>

                            <div className="d-flex flex-wrap justify-content-between text-light py-2">
                                <p className="me-4">
                                    <b className="d-block">Known For</b>
                                    <span>{personInfo.known_for_department}</span>
                                </p>
                                {personInfo.gender > 0 &&
                                    <p className="me-4">
                                        <b className="d-block">Gender</b>
                                        {personInfo.gender === 1
                                            ? <span>Female</span>
                                            : <span>Male</span>
                                        }
                                    </p>}
                                <p className="me-4">
                                    <b className="d-block">Birthday</b>
                                    {personInfo.birthday
                                        ? <span>{personInfo.birthday}</span>
                                        : <span>-</span>
                                    }
                                </p>
                                <p className="me-4">
                                    <b className="d-block">Place of Birth</b>
                                    {personInfo.place_of_birth
                                        ? <span>{personInfo.place_of_birth}</span>
                                        : <span>-</span>
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 col-xl-10 text-white justify-content-start ps-sm-1">
                            <div>
                                <h2 className="mt-4 mt-md-0">{personInfo.name} </h2>
                            </div>
                            <div >
                                <h3 className="my-1">Biography</h3>
                                {
                                    personInfo.biography
                                        ? <p className="preLineSpace my-1">{personInfo.biography}</p>
                                        : `We don't have a biography for ${personInfo.name} `
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="text-light border-top py-3">Acting</h3>
                    <MiniSlider data={personMovies} />
                </div>
            </div >
        )
    }

    useEffect(() => {
        document.title = personInfo.name;
    }, [personInfo]);

    return (
        <Style>
            {renderFarm()}
        </Style>
    )
}
export default Person;