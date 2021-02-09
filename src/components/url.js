import React from "react";

function Url() {
  var Url =
    "https://www.youtube.com/watch?v=XtMThy8QKqU&t=10403s&ab_channel=CleverProgrammer";

  function splitter() {
    const id = Url.split("v=")[1].substr(0, 11);
    console.log(id);
  }

  splitter();

  return <div></div>;
}

export default Url;
