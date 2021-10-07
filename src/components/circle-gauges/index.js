import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircleProgressbar(props) {
    const [value, setVAlue] = useState(0);

    useEffect(() => {
        setVAlue(props.value);
    }, [props]);

    return (
        <div style={{ width: props.width ? `${props.width}px` : '80px' }}>
            <CircularProgressbar value={value} maxValue={100} text={`${value}%`} background={true} backgroundPadding={5} strokeWidth={5} styles={buildStyles(
                {
                    pathTransitionDuration: 3,
                    textColor: '#fff',
                    textSize: '26px',
                    backgroundColor: '#111',
                    trailColor: 'rgba(31, 184, 215, 0.25)'
                })}>
                <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>66%</strong> mate
                </div>
            </CircularProgressbar>
        </div>

    )
}
CircleProgressbar.propTypes = {
    value: PropTypes.number.isRequired
};
export default CircleProgressbar;