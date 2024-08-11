import {AppLayout} from "@/components/layout/AppLayout";
import {Column} from "@/components/Column";
import {Button} from "@/components/Button";
import Modal from "@/components/Modal";
import {TextField} from "@/components/TextField";
import {TextArea} from "@/components/TextArea";
import {NoteAction, useNote} from "@/hooks/useNote";
import {Card, CardTitle, CardContent} from "@/components/Card";
import {Row} from "@/components/Row.tsx";
import {FormEvent, useState} from "react";

export const DashboardPage = () => {
    const {
        notes, activeNote, setActiveNote,
        formRef,
        handleFormAction,
        deleteNote
    } = useNote();
    const [openCreateNoteModal, setOpenCreateNoteModal] = useState(false);
    const [openEditNoteModal, setOpenEditNoteModal] = useState(false);

    const handleCreateNote = (e: FormEvent<HTMLFormElement>) => {
        handleFormAction(e, NoteAction.CREATE);
        setOpenCreateNoteModal(false);
    }

    const handleEditNote = (e: FormEvent<HTMLFormElement>) => {
        handleFormAction(e, NoteAction.UPDATE);
        setOpenEditNoteModal(false);
    }

    return (
        <AppLayout>
            <Column className={'space-y-0 max-w-lg mx-auto'}>
                <Modal
                    open={openCreateNoteModal}
                    onOpenChange={setOpenCreateNoteModal}
                    trigger={<Button className={'mb-4'}>Create Note</Button>}
                >
                    <form ref={formRef} onSubmit={handleCreateNote}>
                        <Column className={'space-y-4'}>
                            <TextField
                                placeholder={'Title'}
                                name={'title'}
                                id={'title'}
                                required
                            />

                            <TextArea
                                placeholder={'Content'}
                                name={'content'}
                                id={'content'}
                                required
                            />

                            <Button type={'submit'}>
                                Create
                            </Button>
                        </Column>
                    </form>
                </Modal>

                <Modal
                    open={openEditNoteModal}
                    onOpenChange={setOpenEditNoteModal}
                >
                    <form ref={formRef} onSubmit={handleEditNote}>
                        <Column className={'space-y-4'}>
                            <TextField
                                placeholder={'Title'}
                                name={'title'}
                                id={'title'}
                                defaultValue={activeNote?.title}
                                required
                            />

                            <TextArea
                                placeholder={'Content'}
                                name={'content'}
                                id={'content'}
                                defaultValue={activeNote?.content}
                                required
                            />

                            <Button type={'submit'}>
                                Edit
                            </Button>
                        </Column>
                    </form>
                </Modal>


                <Column className={'space-y-4 mt-5 w-full'}>
                    <TextField type={'search'}/>

                    {
                        notes.map((note) => (
                            <Card key={note.id}>
                                <CardTitle>{note.title}</CardTitle>
                                <CardContent>
                                    <p>{note.content}</p>

                                    <Row className={'justify-end'}>
                                        <Button onClick={() => {
                                            setActiveNote(note);
                                            setOpenEditNoteModal(true);
                                        }}>Edit</Button>
                                        <Button onClick={() => deleteNote(note.id)}>Delete</Button>
                                    </Row>

                                </CardContent>
                            </Card>)
                        )
                    }
                </Column>

            </Column>
        </AppLayout>
    );
};