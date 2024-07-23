import React from 'react'
import PropTypes from 'prop-types'

function NoteCard({note}) {
    const body = JSON.parse(note.body);
  return (
    <div>{body}</div>
  )
}

NoteCard.propTypes = {
    note
}

export default NoteCard
