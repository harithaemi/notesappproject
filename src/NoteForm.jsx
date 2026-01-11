import React, { useState, useEffect } from 'react'

const NoteForm = ({ addNote, updateNote, editingNote, setShowForm }) => {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [description, setDescription] = useState('')

  const close = () => {
    setShowForm(false)
  }

  // ✅ Prefill form when editing
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title)
      setDescription(editingNote.description)
      setTag(editingNote.tag || '')
    } else {
      setTitle('')
      setDescription('')
      setTag('')
    }
  }, [editingNote])

  const handleSave = () => {
    if (!title.trim() || !description.trim()) return

    if (editingNote) {
      // ✅ Update existing note
      updateNote({
        ...editingNote,
        title,
        description,
        tag
      })
    } else {
      // ✅ Add new note
      addNote({
        id: Date.now(),
        title,
        description,
        tag,
        status: 'active'
      })
    }

    setShowForm(false)
  }

  return (
    // ✅ MODAL FIX (prevents hiding)
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40">
      <div className="mt-24 w-1/2 bg-white p-4 rounded-md shadow-xl relative">

        <button
          onClick={close}
          className="absolute top-2 right-2 text-white bg-red-700 w-8 h-8 rounded-sm hover:bg-red-800"
        >
          ✕
        </button>

        <input
          className="p-2 bg-stone-200 rounded-sm outline-none mt-8 m-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={4}
          className="p-2 bg-stone-100 rounded-sm outline-none m-2 w-full resize-none"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="p-2 bg-stone-100 rounded-sm outline-none m-2 w-full"
          placeholder="#tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="bg-blue-400 text-white p-2 rounded-sm w-1/2 mx-auto block cursor-pointer"
        >
          {editingNote ? 'Update' : 'Save'}
        </button>

      </div>
    </div>
  )
}

export default NoteForm



