import { useState } from "react";

export default function TodoBar({tab, text, design,selectedTab }) {

  return (
    <>
      <button
        className={`${design} ${tab === text? "bg-sky-300": ""}`}
        onClick={()=>selectedTab(text)}
        name={text}
      >
        {text}
      </button>
    </>
  );
}
