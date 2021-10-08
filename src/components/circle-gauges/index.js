import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircleProgressbar(props) {
    const [value = 0, setVAlue] = useState(props.value);
    const [strokColor, setStrokColor] = useState('0');
    const { fontSize = 26, width } = props;

    function chooseGaugeColor() {
        if (value < 40) {
            setStrokColor('red');
        }
        else if (value < 70) {
            setStrokColor('yellow');

        }
        else if (value >= 70) {
            setStrokColor('green');

        }
    }


    useEffect(() => {
        chooseGaugeColor();
    }, []);
    return (
        <div style={{ width: width ? `${width}px` : '80px' }}>
            <CircularProgressbar value={value} maxValue={100} text={`${value}%`} background={true} backgroundPadding={5} strokeWidth={5} styles={buildStyles(
                {
                    pathTransitionDuration: 3,
                    textColor: '#fff',
                    textSize: `${fontSize}px`,
                    backgroundColor: '#111',
                    trailColor: 'rgba(31, 184, 215, 0.25)',
                    pathColor: strokColor
                })}>
                <div>
                    <strong>66%</strong> mate
                </div>
            </CircularProgressbar>
        </div>

    )
}
CircleProgressbar.propTypes = {
    value: PropTypes.number.isRequired,
    fontSize: PropTypes.number,
    width: PropTypes.number
};
export default CircleProgressbar;