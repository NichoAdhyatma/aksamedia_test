import {FormEvent, useRef, useState} from "react";
import {v4 as uuidv4} from 'uuid';

export type Note = {
    id: string;
    title: string;
    content: string;
    lastUpdate?: number;
}

const noteMock: Note[] = [
    {
        id: '1',
        title: 'First Note',
        content: 'This is the first note',
        lastUpdate: Date.now()
    },
    {
        id: '2',
        title: 'Second Note',
        content: 'This is the second note',
        lastUpdate: Date.now()
    }
]

export enum NoteAction {
    CREATE,
    UPDATE,
}

export const useNote = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [notes, setNotes] = useState<Note[]>(
        localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') as string) : noteMock);
    const [activeNote, setActiveNote] = useState<Note | null>(null);

    const createNote = (note: Note) => {
        setNotes([note, ...notes]);

        localStorage.setItem('notes', JSON.stringify([note, ...notes]));

        alert('Note created');
    };

    const updateNote = (id: string, {title, content}: { title: string, content: string }) => {
        const newNotes = notes.map((note) => {
            if (note.id === id) {
                return {
                    id,
                    title,
                    content,
                    lastUpdate: Date.now()
                };
            }
            return note;
        });

        setNotes(newNotes);

        localStorage.setItem('notes', JSON.stringify(newNotes));

        alert('Note updated');
    }

    const handleFormAction = (e: FormEvent<HTMLFormElement>, action: NoteAction) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) {
            alert('Form not found');
            return;
        }

        const formData = new FormData(form);
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;

        if (action === NoteAction.CREATE) {
            createNote({
                id: uuidv4(),
                title,
                content,
                lastUpdate: Date.now()
            });
        }

        if (action === NoteAction.UPDATE) {
            const id = activeNote?.id;
            updateNote(id ?? '', {
                title,
                content
            });
        }
    }

    const deleteNote = (id: string) => {
        const newNote = notes.filter((note) => note.id !== id);

        setNotes(newNote);

        localStorage.setItem('notes', JSON.stringify(newNote));

        alert('Note deleted');
    };

    return {formRef, notes, activeNote, setActiveNote, handleFormAction, deleteNote};
}