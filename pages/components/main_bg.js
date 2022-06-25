import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "./footer"

function Main_bg(){
    const style = {
        width: "100%",
        top: "0px",
        zIndex: "-1"
    }

    return(
        <main style={style} className='!absolute'>
            <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
                
    
                render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section" style={{backgroundImage:"url('/images/45942.jpg')", backgroundSize: "cover"}}>
                        </div>
                        <div className="section" style={{backgroundImage:"url('/images/45347.jpg')", backgroundSize: "cover"}}>
                        </div>
                        <div className="section fp-auto-height">
                            <Footer></Footer>
                        </div>
                        {/* 마지막 .section에는 fullpage popup이 생성됨 */}
                    </ReactFullpage.Wrapper>
                );
                }}
            />
        </main>
        
    )
}

export default Main_bg;