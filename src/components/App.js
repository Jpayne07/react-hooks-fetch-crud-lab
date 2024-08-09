import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [qList, setQList] = useState([])
  // const [newQ, setQ] = useState({})


  function handleAddItem(newItem) {
    setQList([...qList, newItem]);
  }

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQList(data))
  },[])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm qList = {handleAddItem}/> : <QuestionList qList = {qList} setQList={setQList} />}
    </main>
  );
}

export default App;
