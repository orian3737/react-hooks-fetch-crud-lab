import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => onDelete(id);
  const handleChangeCorrectAnswer = (event) => onUpdate(id, parseInt(event.target.value));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleChangeCorrectAnswer}>
          {answers.map((answer, index) => (
            <option key={index} value={index}>{answer}</option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;