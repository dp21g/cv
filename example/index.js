import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from '../index'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles/hljs'

const avatarStyle = {
    borderRadius: '50%',
    width: '220px',
    height: '200px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
}

const lineUpStyle = {
    display: 'inline-block',
    textAlign: 'center'
}

class App extends React.Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        const npmInstallString = "> npm install dhaval-patel-cv --save";

        return (
            <Parallax ref="parallax" pages={3}>

                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                     <div style={lineUpStyle}>
                    <img class="animated bounceIn" src={"/images/dp1.png"} style={avatarStyle} />
                   
                    <SyntaxHighlighter language='javascript' style={monokai}>{npmInstallString}</SyntaxHighlighter>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    Another page ...
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    The end.
                </Parallax.Layer>

            </Parallax>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
