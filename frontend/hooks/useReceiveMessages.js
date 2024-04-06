import React from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useConversationContext } from '../context/ConversationContext'
import toast from 'react-hot-toast'

const useReceiveMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversationContext()
    const { selectedConversation } = useConversationContext()

    React.useEffect(() => {
        socket?.on('newMessage', (newMessage, senderUserName, senderUserId) => {
            // console.log('From useReceiveMessages: ', selectedConversation)
            toast.success(`New message from ${senderUserName}`)
            if (selectedConversation._id === senderUserId) setMessages([...messages, newMessage])
        })

        return () => socket?.off('newMessage')
    }, [socket, messages, setMessages])
}

export default useReceiveMessages