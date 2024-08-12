import {Note} from "@/hooks/useNote";
import {Column} from "@/components/Column.tsx";
import {Card, CardContent, CardTitle} from "@/components/Card";
import {Row} from "@/components/Row.tsx";
import {Button} from "@/components/Button.tsx";
import {Dispatch, SetStateAction, useState} from "react";
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
    const [filter, setFilter] = useState<'newest' | 'oldest'>('newest');

    const handleOnClickDelete = (id: string) => {
        const result = confirm('Are you sure you want to delete this note?');
        if(result) actions.deleteNote(id)
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
            <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'newest' | 'oldest')}
                className="border bg-white rounded-lg dark:bg-gray-800 px-2 py-2"
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>


            {notes
                .sort((a, b) => {
                    if (filter === 'newest') {
                        return (b.lastUpdate ?? 0) - (a.lastUpdate ?? 0);
                    } else {
                        return (a.lastUpdate ?? 0) - (b.lastUpdate ?? 0);
                    }
                })
                .map((note) => (
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
