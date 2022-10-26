import HTMLFlipBook from "react-pageflip";
import React from "react"
import JSONdata from "../fourthpig.json"
import mouse from "../static/images/mouse.png"
import {useRef} from "react"

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });

  const prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };
export function MyBook(props) {
/*   const book = useRef();
  const chooseOption =(page_number)=> {
    console.log("hello");
    book.pageFlip.flipNext();
  }; */

  return (
    <HTMLFlipBook width={300} height={500} showCover={true} className="demo-book">
      <PageCover>The Fourth Little Pig</PageCover>
      {JSONdata.story.pages.map((data) => (
      <div className="demoPage">
        <p>Then,</p>
        {
         data.text.map((lines) => (<p>{lines}</p>))} 
        <img style={{height:100}} src={mouse}/>
        {data.option1[0]===""?null:
        <><p>What should I do?</p>
        <p>If I...</p><button>{data.option1[0]}</button><button>{data.option2[0]}</button></>
      }
      </div>
      ))}
    </HTMLFlipBook>
  );
}