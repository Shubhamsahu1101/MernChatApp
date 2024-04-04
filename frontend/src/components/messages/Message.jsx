
const Message = () => {
	return (
		<div className="chat chat-end">
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img className="w-8 h-8" alt='Tailwind CSS chat bubble component' src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=" />
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500 pb-2`}>Hello</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>6:30</div>
		</div>
	);
};
export default Message;