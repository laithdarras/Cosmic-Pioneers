import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const Journal = () => {
  const [currEntry, setCurrEntry] = useState('');   // state to store the current journal entry
  const [mood, setMood] = useState('');  // state to store the mood
  const [journalEntries, setJournalEntries] = useState([]);  // state to store all journal entries

  const handleChanges = (e) => {
    setCurrEntry(e.target.value);  // update the current journal entry
  };

  const handleMoodChanges = (mood) => {
    setMood(mood);  // update the mood
  }

  const handleSubmit = (e) => {   // function to handle the form submission
    e.preventDefault();
    if (currEntry && mood) {  // check if the current journal entry and mood are not empty
      setJournalEntries([...journalEntries, {text: currEntry, mood}]);  // add the current journal entry to the list of journal entries
      setCurrEntry('');  // clear the current journal entry
      setMood('');  // clear the mood
    }
  };

  const handleDelete = (index) => {
    const newEntries = journalEntries.filter((_, i) => i !== index);  // filter out the entry at the given index
    setJournalEntries(newEntries);  // update the list of journal entries
  };

  return (
    <Container className="journal">
              <h1>Astronaut's Journal</h1>
              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="mood check">
                      <Form.Label>How are you feeling?</Form.Label>
                          <div className="mood check">
                          <Button variant={mood === '😀' ? 'success' : 'light'} onClick={() => handleMoodChanges('😀')} className={mood === '😀' ? 'selected' : ''}>😀</Button>
                          <Button variant={mood === '😐' ? 'success' : 'light'} onClick={() => handleMoodChanges('😐')} className={mood === '😐' ? 'selected' : ''}>😐</Button>
                          <Button variant={mood === '😔' ? 'success' : 'light'} onClick={() => handleMoodChanges('😔')} className={mood === '😔' ? 'selected' : ''}>😔</Button>
                          </div>
                          </Form.Group>


                  <Form.Group controlId="journalEntry">
                      <Form.Label>Write your thoughts after exercise:</Form.Label>
                      <Form.Control 
                          as="textarea" 
                          rows={3} 
                          value={currEntry} 
                          onChange={handleChanges} 
                          placeholder="How was your workout? Any reflections?" 
                      />
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Entry</Button>
              </Form>
  
              <h2>Your Journal Entries</h2>
              <ListGroup>
                  {journalEntries.map((entry, index) => (
                      <ListGroup.Item key={index}>
                        {entry.mood} - {entry.text}
                        <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                      </ListGroup.Item>
                  ))}
              </ListGroup>
          </Container>
    );

};
  
export default Journal;
