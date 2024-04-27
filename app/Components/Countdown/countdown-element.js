'use Client';

import classes from './countdown-element.module.css';

export default function CountDownElement({value, label}) {
    return(
        <div className={classes.dateItem}>
            <div className={classes.dateSquare}>
                <h1>{value}</h1>
                <hr></hr>
            </div>
            <div className={classes.dateSquareLabel}>
                <p>{label}</p>
            </div>
        </div>
    );
}