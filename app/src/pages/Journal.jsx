import React, { useState } from "react";
import { Container, Form, Button, ListGroup, Badge } from "react-bootstrap";

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
              <h1 className="text-center mb-4">Astronaut's Journal</h1>
              <Form onSubmit={handleSubmit} className="mb-4">
              <Form.Group controlId="mood check" className="text-center mb-4">
                      <Form.Label>How are you feeling?</Form.Label>
                          <div className="d-flex justify-content-center mb-3">
                          <Button variant={mood === '😀' ? 'success' : 'light'} onClick={() => handleMoodChanges('😀')} className="mx-2">😀</Button>
                          <Button variant={mood === '😐' ? 'success' : 'light'} onClick={() => handleMoodChanges('😐')} className="mx-2">😐</Button>
                          <Button variant={mood === '😔' ? 'success' : 'light'} onClick={() => handleMoodChanges('😔')} className="mx-2">😔</Button>
                          </div>
                          </Form.Group>


                  <Form.Group controlId="journalEntry" className="mb-4">
                      <Form.Label>Write your thoughts after exercise:</Form.Label>
                      <Form.Control 
                          as="textarea" 
                          rows={3} 
                          value={currEntry} 
                          onChange={handleChanges} 
                          placeholder="How was your workout? Any reflections?" 
                          className="form-control"
                      />
                  </Form.Group>
                  <div className="text-center">
                  <Button variant="primary" type="submit">Save Entry</Button>
                  </div>
              </Form>
  
              <h2 className="text-center mb-4">Your Journal Entries</h2>
              <ListGroup>
                  {journalEntries.map((entry, index) => (
                      <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                        <span>
                          <Badge bg="secondary" className="me-2">{entry.mood}</Badge>
                            {entry.text}
                        </span>
                        <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                      </ListGroup.Item>
                  ))}
              </ListGroup>
          </Container>
    );

};
  
export default Journal;
