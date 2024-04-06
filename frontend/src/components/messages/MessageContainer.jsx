import Messages from "./Messages";

import MessageInput from "./MessageInput";
import { useConversationContext } from "../../../context/ConversationContext";
import { useEffect } from "react";

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversationContext()

    useEffect(() => {
        // cleanup function
        setSelectedConversation(null)
    },[setSelectedConversation])
    
    if(selectedConversation===null) return <NoChatSelected/>
	return (
		<div className='w-full flex flex-col'>
			<>
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
				</div>
                <Messages/>
                <MessageInput/>
			</>
		</div>
	);
};


const NoChatSelected = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold text-gray-900'>Select a chat</div>
            <div className='text-gray-500'>to start messaging</div>
        </div>
    )
}

export default MessageContainer;