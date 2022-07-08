import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/header";
import Footer from "./components/footer";
import React, { useEffect } from "react";
import Image from "next/image";

function Main_bg() {
  useEffect(() => {
    // 메인페이지에서는 헤더가 absolute화, border 제거
    const tar = document.getElementById("headerTarget");
    const tar2 = document.getElementById("headerTarget2");
    const tar3 = document.getElementById("footerTarget");
    tar.classList.remove("relative", "bg-white");
    tar.classList.add("absolute", "z-10", "w-full");
    tar2.classList.remove("border-b");
    tar3.classList.remove("border-t");

    // fullpage.js waterMark remover
    // const warterMark = document.getElementById("waterMarkTarget");
    // warterMark.childNodes[1].innerHTML="asd";
    // warterMark.childNodes[2].innerHTML="qwe";
  }, []);

  return (
    <>
      <Header></Header>

      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section md:!w-2/4 w-full mx-auto">
                <Image
                  src={"/images/bg/Klaxosaur.jpg"}
                  alt={"test"}
                  layout={"fill"}
                  // width={1000}
                  // height={1000}
                ></Image>
              </div>

              <div className="section md:!w-2/4 w-full mx-auto">
                <Image
                  src={"/images/bg/RFC.jpg"}
                  alt={"test"}
                  width={1000}
                  height={1000}
                ></Image>
              </div>

              {/* <div
                className="section"
                style={{
                  backgroundImage: "url('/images/bg/RFC.jpg')",
                  backgroundSize: "cover",
                }}
              ></div> */}
              <div className="section fp-auto-height" id="waterMarkTarget">
                <Footer></Footer>
              </div>
              {/* 마지막 .section에는 fullpage popup이 생성됨 */}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default Main_bg;
