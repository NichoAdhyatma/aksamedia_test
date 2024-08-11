import {Note} from "@/hooks/useNote";
import {Column} from "@/components/Column.tsx";
import {Card, CardContent, CardTitle} from "@/components/Card";
import {Row} from "@/components/Row.tsx";
import {Button} from "@/components/Button.tsx";
import {Dispatch, SetStateAction} from "react";

interface NoteActions {
    deleteNote: (id: string) => void;
    setActiveNote: Dispatch<SetStateAction<Note | null>>;
    setOpenEditNoteModal: Dispatch<SetStateAction<boolean>>;
}

interface NoteListProps {
    notes: Note[];
    actions: NoteActions;
}

export const NoteList = ({ notes, actions }: NoteListProps) => {
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
                    <CardContent>
                        <p>{note.content}</p>

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
                            <Button variant={'danger'} onClick={() => actions.deleteNote(note.id)}>Delete</Button>
                        </Row>
                    </CardContent>
                </Card>
            ))}
        </Column>
    );
};
