import { useEffect, useState } from 'react'

interface PaginationProps {
    perPage: number
    currentPage: number
    totalCount: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
export const Pagination = (props: PaginationProps) => {
    const { perPage, currentPage, totalCount, setCurrentPage } = props
    const showPage = 5
    const [sTotalPage, setTotalPage] = useState<number>(1)
    const [sPageList, setPageList] = useState<number[]>([])

    const moveNextPage = () => {
        if (currentPage < sTotalPage) setCurrentPage((prev: number) => prev + 1)
    }

    const movePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev: number) => prev - 1)
    }

    useEffect(() => {
        const totalPage = Math.ceil(totalCount / perPage)
        setTotalPage(totalPage === 0 ? 1 : totalPage)
        const pageList = [] as number[]
        if (totalPage < showPage) {
            for (let i = 1; i <= totalPage; i++) {
                pageList.push(i)
            }
        } else {
            for (let i = 1; i <= showPage; i++) {
                pageList.push(i)
            }
        }
        setPageList(pageList)
    }, [totalCount])

    return (
        <div className="flex items-center gap-x-1">
            <button
                type="button"
                className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                onClick={movePrevPage}
            >
                <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
                <span aria-hidden="true" className="sr-only">
                    Previous
                </span>
            </button>
            <div className="flex items-center gap-x-1">
                {sPageList.map((page: number) => (
                    <button
                        key={page}
                        type="button"
                        className={`${
                            currentPage === page ? 'border-gray-200' : 'border-transparent'
                        } min-h-[38px] min-w-[38px] flex justify-center items-center border text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-white/10`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                type="button"
                className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                onClick={moveNextPage}
            >
                <span aria-hidden="true" className="sr-only">
                    Next
                </span>
                <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>
    )
}
