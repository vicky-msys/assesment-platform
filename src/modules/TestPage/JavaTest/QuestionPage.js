import React from "react";
function QuestionPage(props) {
    const {collections} = props;
  return (
    <div>
        {collections.map((item, index)=>{
            <div key={index}>{item}</div>
        })}
    </div>
  );
}
export default QuestionPage;
