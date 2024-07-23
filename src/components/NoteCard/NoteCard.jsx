import React from "react";
import PropTypes from "prop-types";

function NoteCard({ note }) {
  const body = JSON.parse(note.body);
  let position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);
  return (
    <div className="card" style={{ backgroundColor: colors.colorBody }}>
      <div className="card-body">
        <textarea
          defaultValue={body}
          style={{ color: colors.colorText }}
        ></textarea>
      </div>
    </div>
  );
}

export default NoteCard;
