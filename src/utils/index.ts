const dateFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeStyle: 'short'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)