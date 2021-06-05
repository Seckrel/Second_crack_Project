import Header from './header/HeaderComponent';
import Footer from './FooterComponents';
import Body from './BodyComponent';
import { useState, useEffect } from 'react';


function Main(){
    const [viewType, setViewType] = useState("mobile")
      useEffect(() => {
          const setResponsiveness = () => {
              let temp;
              const width = window.innerWidth;
              if (width < 600){
                  temp = "mobile"
              }else if (width >= 600 && width < 1000){
                  temp = "tablet"
              }else if (width >= 1000 && width < 1280) {
                  temp = "laptop"
              }else{
                  temp = "pc"
              }
              setViewType(temp);
          }
          setResponsiveness();
          window.addEventListener("resize", () => setResponsiveness());
      }, [])
    return(
        <div id="article">
            <Header
                viewType={viewType}
                />
            <Body 
                viewType={viewType}
            />
            <Footer
                viewType={viewType}
            />
        </div>
    )
}

export default Main;