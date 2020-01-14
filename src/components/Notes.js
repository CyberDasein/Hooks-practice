import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
export const Notes = ({ notes, onRemove }) => (
    <TransitionGroup component="ul" className="list-group ">
        {notes.map(note => (
            <CSSTransition key={note.id} timeout={800} classNames={'note'}>
                <li className="list-group-item note"                
                > <div>
                        <strong> {note.title} </strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button type="button" onClick={() => onRemove(note.id)} className="btn btn-outline-danger btn-sm">
                        &times;
                </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)