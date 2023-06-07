// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component{
    state={btnText:Light Mode,mode:dark-mode,btnMode:dark-button}

    changeMode=()=>{
        this.state(prevState=>{
            return ({btnText==="Light Mode"?{btnText:Dark Mode}:{btnText:Light Mode}})
            return ({mode==="dark-mode"?{mode:light-mode}:{mode:dark-mode}})
            return ({btnMode===dark-button?{btnMode:light-mode}:{btnMode:dark-mode}})
        })
    }

    render(){
        const {btnText,mode,btnMode}=this.state

        return (
            <div className="bg">
                <div className={mode}>
                    <h1>Click To Change Mode</h1>
                    <button type="button" className={btnMode} onClick={this.changeMode}>{btnText}</button>
                </div>
            </div>
            
        )
    }

}

export default LightDarkMode