import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id
        const authUser = req.user

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        conversation.messages.push(newMessage._id)

        const receiverSocketId = getSocketId(receiverId)
        if(receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage, authUser.username, senderId)
        }

        // await conversation.save()
        // await newMessage.save()

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)
    } catch (error) {
        console.log('Error on sendMessages controller: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export const getMesssages = async (req, res) => {
    try {
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }
        return res.status(200).json(conversation.messages)
    } catch (error) {
        console.log('Error on getMessages controller: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}