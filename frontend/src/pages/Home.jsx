import { ConversationContextProvider } from "../../context/ConversationContext";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
	return (
		<ConversationContextProvider>
			<div className='flex h-5/6 w-8/12 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<Sidebar/>
				<MessageContainer/>
			</div>
		</ConversationContextProvider>
	);
};

export default Home;