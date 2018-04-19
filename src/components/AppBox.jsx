import * as React from 'react';

const styles = {
    appbox: {
        'width': '200px',
        'height': '200px',
        'margin': '25px',
        'float': 'left',
        'position': 'relative',
        'border-style': 'solid',
        'cursor': 'pointer',
        'background-color': 'white',
        'border-color': 'rgba(0, 0, 0, .5)'
    },

    'appname': {
        'width': '200px',
        'font-size': '1em',
        'bottom': '0',
        'height': '50px',
        'position': 'absolute',
        'background': 'rgba(129, 129, 129, 0.59)'
    },

    'appNameText': {
        'margin': '15px 5px 0px',
        'color': 'white'
    },

    'github': {
        'position': 'absolute',
        'top': '0',
        'left': '0'
    }
}

const AppBox = (props) => {
    return (
        <div style={styles.appbox}>
            <div class="logo">
                <img src={props.logo} height="200" />
            </div>
            <div style={styles.github}>
                <img height="32" src='images/github.png' />
            </div>
            <div style={styles.appname}>
                <div style={styles.appNameText}>{props.name}</div>
            </div>
        </div>
    )
};


export default AppBox;
//<AppBox logo={someLogo} name={someName} />

