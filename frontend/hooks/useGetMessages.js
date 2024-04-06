import { useEffect, useState } from "react";
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversationContext();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                console.log('From useGetMessages fetched Messages: ', data);
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages;