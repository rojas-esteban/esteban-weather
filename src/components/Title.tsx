interface ITitle {
    level: number,
    children: React.ReactNode,
}

export default function Title({ level, children }: ITitle) {
    return (
        <h1
            className={`text-sky-900 font-bold text-3xl mb-4 text-center ${level === 1 ? "text-2xl" : "text-xl"}`}
        >
            {children}
        </h1>
    )
}