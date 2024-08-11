import {FormEvent, useRef, useState} from "react";
import {v4 as uuidv4} from 'uuid';

export type Note = {
    id: string;
    title: string;
    content: string;
}

const noteMock: Note[] = [
    {
        id: '1',
        title: 'First Note',
        content: 'This is the first note'
    },
    {
        id: '2',
        title: 'Second Note',
        content: 'This is the second note'
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
        setNotes([...notes, note]);

        localStorage.setItem('notes', JSON.stringify([...notes, note]));

        alert('Note created');
    };

    const updateNote = (id: string, {title, content}: { title: string, content: string }) => {
        setNotes(notes.map((note) => {
            if (note.id === id) {
                return {
                    id,
                    title,
                    content
                };
            }
            return note;
        }));

        localStorage.setItem('notes', JSON.stringify(notes));

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
                content
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
        setNotes(notes.filter((note) => note.id !== id));

        localStorage.setItem('notes', JSON.stringify(notes));

        alert('Note deleted');
    };

    return {formRef, notes, activeNote, setActiveNote, handleFormAction, deleteNote};
}