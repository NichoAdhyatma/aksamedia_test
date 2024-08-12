import {Row} from "@/components/atoms/Row.tsx";
import {Button} from "@/components/atoms/Button.tsx";


interface PaginationButtonProps {
    currentPage: number,
    totalPages?: number,
    setPage: (page: number) => void
}

export const PaginationButton = ({currentPage, totalPages, setPage}: PaginationButtonProps) => {
    return (
        <Row className={'justify-center mt-4'}>
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
        </Row>
    );
};