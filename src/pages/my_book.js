import HTMLFlipBook from "react-pageflip";
import flipBook from "react-pageflip"
import React from "react"
import JSONdata from "../fourthpig.json"
import mouse from "../static/images/mouse.png"
import {useRef} from "react"
import style from '../styles/Book.module.css'

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

  

export function MyBook(props) {
  const nextButtonClick = () => {
    console.log(this);
    this.flipBook.pageFlip().flipNext();
  };
  return (
    <HTMLFlipBook ref={(component) => (this.pageFlip = component)} width={300} height={500} showCover={true} className="demo-book">
      <PageCover>The Fourth Little Pig</PageCover>
      {JSONdata.story.pages.map((data) => (
      <div className="demoPage">
        <p className={style.text}>Then,</p>
        {
         data.text.map((lines) => (<p className={style.text}>{lines}</p>))} 
        <img style={{height:100}} src={mouse}/>
        {data.option1[0]===""?null:
        <><p className={style.text}>What should I do?</p>
        <p className={style.text}>If I...</p><button  className={style.text}>{data.option1[0]}</button><button className={style.text}>{data.option2[0]}</button></>
      }
      </div>
      ))}
    </HTMLFlipBook>
  );
}