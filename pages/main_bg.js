import ReactFullpage from '@fullpage/react-fullpage';
import Header from "./components/header"
import Footer from "./components/footer"
import React, { useEffect } from 'react';

function Main_bg(){
    // 메인페이지에서는 헤더가 absolute화, border 제거
    useEffect(() => {
        const tar = document.getElementById("headerTarget");
        const tar2 = document.getElementById("headerTarget2");
        const tar3 = document.getElementById("footerTarget");
        tar.classList.remove("relative","bg-white");
        tar.classList.add("absolute", "z-10", "w-full");
        tar2.classList.remove("border-b");
        tar3.classList.remove("border-t");
    },[])

    return(
        <>
            <Header></Header>

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
        </>
        
    )
}

export default Main_bg;