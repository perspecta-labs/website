const HeaderPage = ({ title }: { title: string }) => {
    return (
        <div className="w-3/4">
            <div className="text-center">
                <div className="font-bold text-3xl h1">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default HeaderPage
