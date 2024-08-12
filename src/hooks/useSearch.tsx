import {throttle} from 'lodash';
import {ChangeEvent} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Note} from "@/hooks/useNote.tsx";

export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const onSearchChange = throttle((event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setSearchParams({[name]: value});
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set(name, value);
            newParams.set('page', '1');
            return newParams;
        });
    }, 300);

    const filterNote = (notes: Note[]) => {
        return notes.filter((note) => {
            return note.title.includes(searchParams.get('note') ?? "") ||
                note.content.includes(searchParams.get('note') ?? "")
        })
    }

    const sortNote = (notes: Note[], type: string) => {
        return notes.sort((a, b) => {
            if (type === 'newest') {
                return (b.lastUpdate ?? 0) - (a.lastUpdate ?? 0);
            } else {
                return (a.lastUpdate ?? 0) - (b.lastUpdate ?? 0);
            }
        });
    }

    return {searchParams, onSearchChange, filterNote, sortNote};
};
