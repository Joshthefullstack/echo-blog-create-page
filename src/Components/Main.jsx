import React from "react";
import style from '../module_css/Main.module.css'

function Main() {
  return (
    <div className={style.main}>
      <div className={style.main_section}>
        <div className={style.disp_flex}>
          <div className={style.disp}>
            <label htmlFor="title">Title</label>
            <input type="text" />
          </div>
          <div className={style.disp}>
            <label htmlFor="title">Author</label>
            <input type="text" />
          </div>
        </div>
        <div className={style.disp}>
            <label htmlFor="">Article</label>
            <textarea name="" id="" cols="30" rows="10" className={style.style_input} placeholder="Input your text here..."></textarea>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Main;
