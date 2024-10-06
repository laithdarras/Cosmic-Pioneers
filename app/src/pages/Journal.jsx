import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Container, Form, Button, ListGroup, Badge } from "react-bootstrap";
import 'chart.js/auto';

const Journal = () => {
  const [currEntry, setCurrEntry] = useState('');   // state to store the current journal entry
  const [mood, setMood] = useState('');  // state to store the mood
  const [journalEntries, setJournalEntries] = useState([]);  // state to store all journal entries
  const [showChart, setShowChart] = useState(false);  // state to toggle the chart display
  const [moodData, setMoodData] = useState({});  // state to store the mood data for the chart

  const handleChanges = (e) => {
    setCurrEntry(e.target.value);  // update the current journal entry
  };

  const handleMoodChanges = (mood) => {
    setMood(mood);  // update the mood
  }

  const handleSubmit = (e) => {   // function to handle the form submission
    e.preventDefault();
    if (currEntry && mood) {  // check if the current journal entry and mood are not empty
      const newEntries = [...journalEntries, {text: currEntry, mood}];  // add the current journal entry to the list of journal entries
      setJournalEntries(newEntries);  // update the list of journal entries
      localStorage.setItem('entries', JSON.stringify(newEntries));  // store the journal entries in local storage
      setCurrEntry('');  // clear the current journal entry
      setMood('');  // clear the mood
    }
  };

  const handleDelete = (index) => {
    const newEntries = journalEntries.filter((_, i) => i !== index);  // filter out the entry at the given index
    setJournalEntries(newEntries);  // update the list of journal entries
    localStorage.setItem('entries', JSON.stringify(newEntries));  // store the updated journal entries in local storage
  };

  useEffect(() => {
    const storage = localStorage.getItem('entries');

    if (!storage) {
      localStorage.setItem('entries', JSON.stringify([]));  // initialize the journal entries if not present in local storage
    };

    let entries;
    try {
      entries = JSON.parse(storage) || [];  // get the journal entries from local storage
    } catch (error) {
      console.error("Error parsing entries from local storage", error);
      entries = [];
    }

    setJournalEntries(entries);  // set the journal entries

    const moodCounts = {'😀': 0, '😐': 0, '😔': 0};
    if (Array.isArray(entries)) {
      entries.forEach(entry => {
        if (entry.mood in moodCounts) {
          moodCounts[entry.mood] += 1;
        }
      });
    }
    //   if (entry.mood in moodCounts) {
    //     moodCounts[entry.mood] += 1;  // count and increment the occurrences of each mood
    //   }
    // });
    
    setMoodData({  // set the mood data for the chart
      labels: ['😀', '😐', '😔'],
      datasets: [
        {
          label: 'Mood Insights',
          data: [moodCounts['😀'], moodCounts['😐'], moodCounts['😔']],
          backgroundColor: ['#36b8f4', '#36b8f4', '#36b8f4'],
          borderWidth: 1,
        },
      ],
  });
}, [journalEntries]);


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

              <div className='text-center mt-4'>
                <Button onClick={() => setShowChart(!showChart)}>
                  {showChart ? 'Hide Mood Chart' : 'Show Mood Chart'}
                </Button>
              </div>

              {showChart && (
                <div className="mt-4">
                  <h2 className="text-center mb-4">Mood Tracker</h2>
                  <Bar
                    data={moodData}
                    ptions={{
                        animation: {
                          duration: 2000, // faster animation
                        },
                        scales: {
                          x: {
                            title: {
                              display: true,
                              text: 'Moods', // X-axis
                            },
                            ticks: {
                              autoSkip: true,
                              maxTicksLimit: 10,
                            },
                          },
                          y: {
                            title: {
                              display: true,
                              text: 'Number of Entries', // Y-axis
                            },
                            beginAtZero: true,
                            ticks: {
                              stepSize: 1,
                            },
                          },
                        },
                      }}
                    />
                </div>
              )}
          </Container>
    );
};
  
export default Journal;
