import React from 'react';
import ReactDOM from 'react-dom'
import {Router} from './router'
import {MainPage} from './components/main-page/main-page'


function component()
{
    let element = document.createElement("div");
    element.id = "root";

    return element;
}

document.body.appendChild(component());

ReactDOM.render(<MainPage/>,document.getElementById("root"));