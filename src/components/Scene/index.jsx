import React, { Component } from 'react';
import Indicator from './Indicator';
import './Scene.css'
import Toggler from './Toggler';
class Scene extends Component {
    constructor(props) {
        super(props);
        this.state={
            theme: 'light'
        }
    }
    
    setTheme = () =>{
        const {theme} = this.state
        this.setState({
            theme: theme === 'light' ? 'dark' : 'light'
        })
    }
    render() {
        const {theme} = this.state
        const cn = 'scene ' + theme
        return (
            <div className={cn}>
                <Indicator theme={theme}/>
                <Toggler callbackParent={this.setTheme}/>
            </div>
        );
    }
}

export default Scene;
