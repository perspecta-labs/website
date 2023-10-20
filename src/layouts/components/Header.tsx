const HeaderPage = ({ title }: { title: string }) => {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="font-bold text-6xl h1">
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default HeaderPage
