export default function Header({ title }: { title: string }) {
    return (
        <div className="bg-sky-600 min-w-full font-bold rounded-t-lg">
            <h1 className="pl-2">{title}</h1>
        </div>
    )
}