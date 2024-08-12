import {AppLayout} from "@/components/layout/AppLayout";
import {Column} from "@/components/atoms/Column.tsx";
import {TextField} from "@/components/atoms/TextField.tsx";
import {NoteAction, useNote} from "@/hooks/useNote";
import {FormEvent, useMemo, useState} from "react";
import {usePagination} from "@/hooks/usePagination.tsx";
import {useSearch} from "@/hooks/useSearch.tsx";
import {NoteList} from "@/components/molecules/NoteList.tsx";
import {PaginationButton} from "@/components/molecules/PaginationButton.tsx";
import {ModalCreateNote} from "@/components/molecules/ModalCreateNote.tsx";
import {ModalEditNote} from "@/components/molecules/ModalEditNote.tsx";
import {Select} from "@/components/atoms/Select.tsx";

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

    const {searchParams, onSearchChange, filterNote, sortNote} = useSearch();

    const [openCreateNoteModal, setOpenCreateNoteModal] = useState(false);

    const [openEditNoteModal, setOpenEditNoteModal] = useState(false);

    const [sortType, setSortType] = useState<'newest' | 'oldest'>('newest');

    const handleCreateNote = (e: FormEvent<HTMLFormElement>) => {
        handleFormAction(e, NoteAction.CREATE);
        setOpenCreateNoteModal(false);
    }

    const handleEditNote = (e: FormEvent<HTMLFormElement>) => {
        handleFormAction(e, NoteAction.UPDATE);
        setOpenEditNoteModal(false);
    }

    const paginatedNotes = useMemo(() => paginate(
            filterNote(
                sortNote(notes, sortType)
            )
        ),
        [filterNote, notes, paginate, sortNote, sortType]);

    return (
        <AppLayout>
            <Column>
                <ModalCreateNote
                    formRef={formRef}
                    openCreateNoteModal={openCreateNoteModal}
                    setOpenCreateNoteModal={setOpenCreateNoteModal}
                    handleCreateNote={handleCreateNote}
                />

                <ModalEditNote
                    formRef={formRef}
                    openEditNoteModal={openEditNoteModal}
                    setOpenEditNoteModal={setOpenEditNoteModal}
                    handleEditNote={handleEditNote}
                    activeNote={activeNote}
                />

                <Column className={'gap-y-4 items-stretch max-w-lg w-full mb-10'}>
                    <TextField
                        name={'note'}
                        placeholder={'Search note'}
                        onChange={onSearchChange}
                        defaultValue={searchParams.get('note') ?? ""}
                        type={'search'}
                    />

                    <Select
                        id="filter"
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value as 'newest' | 'oldest')}
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </Select>

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

                    {notes.length > 0 &&
                        <PaginationButton currentPage={currentPage} totalPages={totalPages} setPage={setPage}/>
                    }
                </Column>
            </Column>
        </AppLayout>
    );
};