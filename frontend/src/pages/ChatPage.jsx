import toast from "react-hot-toast"
function ChatPage() {

  return (
    <div>
      ChatPage
      <button onClick={() => toast.success("You clicked") }>Click me</button>
    </div>
  )
}

export default ChatPage
