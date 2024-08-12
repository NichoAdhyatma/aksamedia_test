import Modal from "@/components/molecules/Modal.tsx";
import {Button} from "@/components/atoms/Button.tsx";
import {Column} from "@/components/atoms/Column.tsx";
import {TextField} from "@/components/atoms/TextField.tsx";
import {TextArea} from "@/components/atoms/TextArea.tsx";
import React from "react";

interface ModalCreateNoteProps {
    formRef?: React.RefObject<HTMLFormElement>,
    openCreateNoteModal?: boolean,
    setOpenCreateNoteModal?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    handleCreateNote?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const ModalCreateNote = ({
                                    formRef,
                                    openCreateNoteModal,
                                    setOpenCreateNoteModal,
                                    handleCreateNote
                                }: ModalCreateNoteProps) => {
    return (
        <Modal
            open={openCreateNoteModal}
            onOpenChange={setOpenCreateNoteModal}
            trigger={<Button className={'mb-4'}>Create Note</Button>}
        >
            <form ref={formRef} onSubmit={handleCreateNote}>
                <Column className={'gap-y-4 w-full items-stretch mt-4'}>
                    <h1 className={'text-center font-semibold text-2xl mb-4'}>Create Note</h1>

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

                    <Button className={'mt-4'} type={'submit'}>
                        Create
                    </Button>
                </Column>
            </form>
        </Modal>

    );
};