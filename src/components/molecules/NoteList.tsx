import {Note} from "@/hooks/useNote.tsx";
import {Column} from "@/components/atoms/Column.tsx";
import {Card, CardContent, CardTitle} from "../atoms/Card";
import {Row} from "@/components/atoms/Row.tsx";
import {Button} from "@/components/atoms/Button.tsx";
import {Dispatch, SetStateAction} from "react";
import {formatDateFromMs} from "@/utils";

interface NoteActions {
    deleteNote: (id: string) => void;
    setActiveNote: Dispatch<SetStateAction<Note | null>>;
    setOpenEditNoteModal: Dispatch<SetStateAction<boolean>>;
}

interface NoteListProps {
    notes: Note[];
    actions: NoteActions;
}

export const NoteList = ({notes, actions}: NoteListProps) => {
    const handleOnClickDelete = (id: string) => {
        const result = confirm('Are you sure you want to delete this note?');
        if (result) actions.deleteNote(id)
    }

    if (notes.length === 0) {
        return (
            <Column>
                <Card>
                    <CardContent>
                        <p>No notes found in this Page...</p>
                    </CardContent>
                </Card>
            </Column>
        );
    }

    return (
        <Column className={'space-y-4 w-full'}>
            {notes.map((note) => (
                    <Card key={note.id}>
                        <CardTitle>{note.title}</CardTitle>
                        <CardContent className={'mt-1'}>
                            <p className={'truncate'}>{note.content}</p>
                            <p className={'text-slate-500'}>{formatDateFromMs(note.lastUpdate ?? Date.now())}</p>

                            <Row className="justify-end">
                                <Button
                                    onClick={() => {
                                        actions.setActiveNote(note);
                                        actions.setOpenEditNoteModal(true);
                                    }}
                                    variant={'warning'}
                                >
                                    Edit
                                </Button>
                                <Button variant={'danger'} onClick={() => handleOnClickDelete(note.id)}>Delete</Button>
                            </Row>
                        </CardContent>
                    </Card>
                ))}
        </Column>
    );
};
