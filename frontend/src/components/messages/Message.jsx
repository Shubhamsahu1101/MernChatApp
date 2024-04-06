import { useAuthContext } from "../../../context/AuthContext";
import { useConversationContext } from "../../../context/ConversationContext";
import { extractTime } from "../../../utils/extractTime";

const Message = (props) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversationContext();
	const fromMe = props.message.senderId === authUser._id;
	const formattedTime = extractTime(props.message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img className="w-8 h-8" alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{props.message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};

export default Message;