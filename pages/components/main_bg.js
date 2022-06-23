import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

function Main_bg(){
    const style = {
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex: "-1"
    }
    return(
        <main style={style}>
            <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
    
                render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section" style={{backgroundImage:"url('/images/45942.jpg')", backgroundSize: "cover"}}>
                            <p>Section 1 (welcome to fullpage.js)</p>
                            <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                            </button>
                        </div>
                        <div className="section" style={{backgroundImage:"url('/images/45347.jpg')", backgroundSize: "cover"}}>
                            <p>Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
                }}
            />
        </main>
    )
}

export default Main_bg;