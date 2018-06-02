import React from 'react'
import {SiteHeader} from '../site-header/site-header'

export class MainPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(<SiteHeader/>);
    }
}