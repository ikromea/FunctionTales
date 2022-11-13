import HTMLFlipBook from "react-pageflip";
import flipBook from "react-pageflip"
import React from "react"
import JSONdata from "../fourthpig.json"
import mouse from "../static/images/mouse.png"
import {useRef} from "react"
import style from '../styles/Book.module.css'
/* eslint-disable */

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
  const book = useRef();
  const[option1,setOption1] = React.useState("");
  const[option2,setOption2] = React.useState("");
  const[total,setTotal]= React.useState(-1);
  function getTotal () {
    setTotal(total+1);
    return total;
};
  return (
    <>
      <HTMLFlipBook width={300} height={500} showCover={true} className="demo-book" ref={book} onFlip={() => {console.log(document.getElementById("button1-"+book.current.pageFlip().getCurrentPageIndex()));setOption1(document.getElementById("button1-"+book.current.pageFlip().getCurrentPageIndex()));setOption2(document.getElementById("button2"));}}>
        <PageCover>The Fourth Little Pig</PageCover>
        {JSONdata.story.pages.map((data) => (
          data.text.map((lines, i) => (
            <div className="demoPage">
              {i === 0 ?
                <p className={style.text}>Then,</p>
                : null}
              <p className={style.text}>{lines}</p>
              <img style={{ height: 100 }} src={mouse} />
              <><p className={style.text}>What should I do?</p>
                <p className={style.text}>If I...</p>
                <option id= {"button1"} value={data.option1} className={style.text}> {console.log(total)}</option>
                <option id= {"button2"} value={data.option2} className={style.text}></option>
                </>
            </div>
          )))

        )}
      </HTMLFlipBook>
{/*       <button onClick={()=>book.current.pageFlip().turnToPage(parseInt(option1[1]))}>{option1[0]}</button>
      <button onClick={()=>book.current.pageFlip().turnToPage(parseInt(option2[1]))}>{option2[0]}</button> */}
      </>
  );
}
