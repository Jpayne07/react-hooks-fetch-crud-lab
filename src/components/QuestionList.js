import React, {useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({qList, setQList}) {
  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedQuestions = qList.filter((q) => q.id !== id);
        setQList(updatedQuestions);
      });
  }

  const questionsList = qList.map(question=>{
    return (<QuestionItem question = {question} key ={question.id} onDeleteClick={handleDeleteClick}/>)
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList}</ul>
    </section>
  );
}

export default QuestionList;
