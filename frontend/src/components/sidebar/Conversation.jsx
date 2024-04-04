
const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer ">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img className="w-8 h-8" src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=" alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">John Doe</p>
                        <span className="text-xl">😁</span>
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation