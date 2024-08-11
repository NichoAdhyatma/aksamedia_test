import {AppLayout} from "@/components/layout/AppLayout";
import {Column} from "@/components/Column";
import {Button} from "@/components/Button";
import Modal from "@/components/Modal";
import {TextField} from "@/components/TextField";
import {TextArea} from "@/components/TextArea";
import {NoteAction, useNote} from "@/hooks/useNote";
import {Row} from "@/components/Row.tsx";
import {FormEvent, useMemo, useState} from "react";
import {usePagination} from "@/hooks/usePagination.tsx";
import {useSearch} from "@/hooks/useSearch.tsx";
import {NoteList} from "@/components/NoteList.tsx";

export const DashboardPage = () => {
    const {
        notes, activeNote, setActiveNote,
        formRef,
        handleFormAction,
        deleteNote
    } = useNote();

    const {
        currentPage,
        totalPages,
        paginate,
        setPage
    } = usePagination({totalItems: notes.length});

    const {searchParams, onSearchChange} = useSearch();

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

    const paginatedNotes = useMemo(() => paginate(notes).filter((note) =>
        note.title.includes(searchParams.get('note') ?? "") ||
        note.content.includes(searchParams.get('note') ?? "")
    ), [notes, paginate, searchParams]);

    return (
        <AppLayout>
            <Column className={'max-w-lg mx-auto'}>
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

                <Column className={'space-y-4 w-full mb-10'}>
                    <TextField
                        name={'note'}
                        placeholder={'Search note'}
                        onChange={onSearchChange}
                        defaultValue={searchParams.get('note') ?? ""}
                        type={'search'}
                    />

                    <NoteList
                        notes={paginatedNotes}
                        actions={
                            {
                                deleteNote,
                                setActiveNote,
                                setOpenEditNoteModal
                            }
                        }
                    />

                    {notes.length > 0 && <Row className={'justify-center'}>
                        <Button
                            onClick={() => setPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <span className="mx-2">Page {currentPage} of {totalPages}</span>
                        <Button
                            onClick={() => setPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </Row>}
                </Column>
            </Column>
        </AppLayout>
    );
};