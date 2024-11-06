import { Navigate } from 'react-router-dom'
import send from '../assets/send.png'
import { useEffect, useState } from 'react'
import { createConversation, fetchConversation } from '../actions/conversation'
import { useDispatch, useSelector } from 'react-redux'

export const Forum = ({ isLogin, }) => {
    const User = JSON.parse(localStorage.getItem('profile'))
    const { conversations } = useSelector((state) => (state.conversations))

    const [conversation, setConversation] = useState('')
    const [msgs, setMsgs] = useState(conversations)
    const dispatch = useDispatch()
    const handleSend = (e) => {
        // e.preventDefault()
        dispatch(createConversation({ sender: User.result.name, message: conversation }))
        setConversation('')
        window.location.reload()
    }
    useEffect(() => {

        dispatch(fetchConversation())
    }, [])
    console.log(conversations)


    return (
        isLogin ? <div className="relative h-screen ">
            <div className="chat text-white py-6 px-14 h-5/6 overflow-auto">

                {msgs?.map((conversation) => (<div className='w-full'>
                    {conversation.sender === User?.result?.name ?
                        <div className="box sreciever flex mb-4 justify-end w-full">

                            <div className="chat-sender  max-w-xl w-fit bg-sender-bbg rounded-xl px-4 py-2 text-sender-text">{conversation.message}</div>

                        </div>
                        : <div className="box sender mb-4 w-full">
                            <h1 className="text-xs mb-1">{conversation.sender}</h1>
                            <div className="chat-sender h-full max-w-xl w-fit bg-receiver-bg rounded-xl px-4 py-2 text-reciever-text">{conversation.message}</div>

                        </div>}
                </div>))}

            </div>

            <div className="absolute h-12 w-full  bottom-10 px-14">
                <div className="bg-white w-full h-full rounded-full px-2 flex">
                    <input type="text" className="w-full h-8 my-auto px-8" placeholder="What's in your mind?" onChange={(e) => setConversation(e.target.value)} value={conversation} />
                    <button className="h-9 w-9 my-auto bg-darkest-blue rounded-full p-2 pl-2.5" onClick={handleSend}>
                        <img src={send} alt="" />
                    </button>
                </div>
            </div>
        </div> : <Navigate to={'/auth'} />
    )
}