import React from 'react'
import NotesCard from './NotesCard'

const NotesList = ({ notes, archiveNote, deleteNote, editNote, restoreNote }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {notes.map(note => (
        <NotesCard
          key={note.id}
          title={note.title}
          description={note.description}
          status={note.status}     // ✅ REQUIRED
          onArchive={() => archiveNote(note.id)}
          onDelete={() => deleteNote(note.id)}
          onEdit={() => editNote(note)}
          onRestore={() => restoreNote(note.id)}
        />
      ))}
    </div>
  )
}

export default NotesList


