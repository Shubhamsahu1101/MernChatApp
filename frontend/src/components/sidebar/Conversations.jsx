import useGetConversations from "../../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  console.log('From Conversations', conversations)
  return (
    <div className="py-2 flex flex-col overflow-auto" >
      {
        conversations.map((c) => (
          <Conversation key={c._id} conversation={c} username={c.username} />
        ))
      }
    </div>
  )
}

export default Conversations