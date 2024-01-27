interface CardProps {
    title: string
    content: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}
export const Card = (props: CardProps) => {
    const { title, content, onClick } = props
    return (
        <div
            className="w-[350px] h-32 p-3 rounded flex flex-col bg-slate-200 text-black cursor-pointer hover:bg-slate-300"
            onClick={onClick}
        >
            <div className="header w-full h-1/3 font-bold truncate">{title}</div>
            <div className="body w-full h-2/3 text-slate-400 line-clamp-3">{content}</div>
        </div>
    )
}
