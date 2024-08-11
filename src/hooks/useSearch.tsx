import {throttle} from 'lodash';
import {ChangeEvent} from 'react';
import {useSearchParams} from 'react-router-dom';

export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const onSearchChange = throttle((event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setSearchParams({[name]: value});
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set(name, value);
            return newParams;
        });
    }, 300)

    return {searchParams, onSearchChange};
};
