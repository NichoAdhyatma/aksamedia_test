import Modal from "@/components/molecules/Modal.tsx";
import {Column} from "@/components/atoms/Column.tsx";
import {TextField} from "@/components/atoms/TextField.tsx";
import {TextArea} from "@/components/atoms/TextArea.tsx";
import {Button} from "@/components/atoms/Button.tsx";
import React from "react";
import {Note} from "@/hooks/useNote.tsx";

interface ModalEditNoteProps {
    formRef?: React.RefObject<HTMLFormElement>,
    openEditNoteModal?: boolean,
    setOpenEditNoteModal?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    handleEditNote?: (e: React.FormEvent<HTMLFormElement>) => void,
    activeNote?: Note | null
}

export const ModalEditNote = ({
                                  formRef,
                                  openEditNoteModal,
                                  setOpenEditNoteModal,
                                  handleEditNote,
                                  activeNote
                              }: ModalEditNoteProps) => {
    return (
        <Modal
            open={openEditNoteModal}
            onOpenChange={setOpenEditNoteModal}
        >
            <form ref={formRef} onSubmit={handleEditNote}>
                <Column className={'gap-y-4 w-full items-stretch mt-4'}>
                    <h1 className={'text-center font-semibold text-2xl mb-4'}>Edit Note</h1>
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

                    <Button className={'mt-4'} type={'submit'}>
                        Edit
                    </Button>
                </Column>
            </form>
        </Modal>
    );
};