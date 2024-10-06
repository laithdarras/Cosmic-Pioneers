import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const Journal = () => {
  const [currEntry, setCurrEntry] = useState('');   // state to store the current journal entry
  const [journalEntries, setJournalEntries] = useState([]);  // state to store all journal entries

  const handleChanges = (e) => {
    setCurrEntry(e.target.value);  // update the current journal entry
  };

  const handleSubmit = (e) => {   // function to handle the form submission
    e.preventDefault();
    if (currEntry) {
      setJournalEntries([...journalEntries, currEntry]);  // add the current journal entry to the list of journal entries
      setCurrEntry('');  // clear the current journal entry
    }
  };

  return (
    <Container className="journal">
              <h1>Astronaut's Journal</h1>
              <Form onSubmit={handleSubmit}>
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
                      <ListGroup.Item key={index}>{entry}</ListGroup.Item>
                  ))}
              </ListGroup>
          </Container>
    );

};
  
export default Journal;
