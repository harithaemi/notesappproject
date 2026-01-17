import React, { useState, useEffect } from 'react'
import bg from './assets/bg.jpg'
import Content from './Content'
import NoteForm from './NoteForm'
import NotesList from './NotesList'

const Home = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

const [editingNote, setEditingNote] = useState(null)
const editNote = (note) => {
  setEditingNote(note)
  setShowForm(true)
}

const [filter, setFilter] = useState("active")
const [search, setSearch] = useState("")

const filteredNotes = notes
  .filter(note => note.status === filter)
  .filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.description.toLowerCase().includes(search.toLowerCase())
  )

const archiveNote = (id) => {
  setNotes(notes.map(n =>
    n.id === id ? { ...n, status: "archived" } : n
  ))
}
const restoreNote = (id) => {
  setNotes(notes.map(n =>
    n.id === id ? { ...n, status: "active" } : n
  ))
}
const deleteNote = (id) => {
  if (filter === "trash") {
    
    setNotes(notes.filter(n => n.id !== id))
  } else {
    
    setNotes(notes.map(n =>
      n.id === id ? { ...n, status: "trash" } : n
    ))
  }
}
const updateNote = (updatedNote) => {
  setNotes(notes.map(n =>
    n.id === updatedNote.id ? updatedNote : n
  ))
  setEditingNote(null)
}
  const [showForm, setShowForm] = useState(false)

 const addNote = (note) => {
    setNotes(prev => [...prev, note])
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="w-screen h-screen overflow-hidden relative">

      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      <div className="relative z-10">
      <Content  setShowForm={setShowForm} search={search} setSearch={setSearch} filter={filter}setFilter={setFilter}/>
{showForm && (
  <NoteForm
    addNote={addNote}
    updateNote={updateNote}
    editingNote={editingNote}
    setShowForm={setShowForm}
  />
)}

 <NotesList
  notes={filteredNotes}
  archiveNote={archiveNote}
  deleteNote={deleteNote}
  editNote={editNote}
  restoreNote={restoreNote}
/>
      </div>

    </div>
  )
}

export default Home



