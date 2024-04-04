import Messages from "./Messages";

import MessageInput from "./MessageInput";

const MessageContainer = () => {
    const noChatSelected = true;
    if(noChatSelected) return <NoChatSelected/>
	return (
		<div className='md:min-w-[600px] flex flex-col'>
			<>
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
				</div>
                <Messages/>
                <MessageInput/>
			</>
		</div>
	);
};


const NoChatSelected = () => {
    return (
        <div className='md:min-w-[600px] flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold text-gray-900'>Select a chat</div>
            <div className='text-gray-500'>to start messaging</div>
        </div>
    )
}

export default MessageContainer;