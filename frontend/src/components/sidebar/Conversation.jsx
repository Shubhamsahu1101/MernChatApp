import { useConversationContext } from "../../../context/ConversationContext"

const Conversation = (props) => {
    const {selectedConversation, setSelectedConversation} = useConversationContext()
    const isSelected = selectedConversation?._id === props.conversation._id
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer ${isSelected? 'bg-sky-500': ''} `}
                onClick={() => setSelectedConversation(props.conversation)}
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img className="w-8 h-8" src={props.conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 mx-3 justify-between">
                        <p className="font-bold text-gray-200">{props.conversation.username}</p>
                    </div>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation