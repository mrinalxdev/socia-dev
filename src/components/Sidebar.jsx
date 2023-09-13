import React from "react";

const Sidebar = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NotEase</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={onDeleteNote}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 20) + "...."}</p>

            <small className="note-meta">
              Last Updated :{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
