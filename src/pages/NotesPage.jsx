import React from 'react'
import {fakeData as notes} from './../assets/fakeData';
import NoteCard from '../components/NoteCard/NoteCard';
export const NotesPage = () => {
  return (
    <div>
      {notes.map(note => NoteCard({note}))}
    </div>
  )
}
