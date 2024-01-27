interface TextButtonProps {
    text: string
    onClick: React.MouseEventHandler<HTMLDivElement>
    widthFull?: boolean
}

export const TextButton = (props: TextButtonProps) => {
    const { text, onClick, widthFull = false } = props
    const width = widthFull ? 'w-full' : 'w-16'
    return (
        <div
            className={`${width} h-8 rounded flex justify-center items-center bg-slate-300 hover:bg-slate-400 cursor-pointer text-black`}
            onClick={onClick}
        >
            {text}
        </div>
    )
}
