import { useWallpaper } from "../context/wallpaper"
import { useChatStore } from "../store/useChatStore";
import { useSelectedConversation } from "../hooks/useSelectedConversation";
import { useEffect } from "react";

function ChatPage() {
  const { frameStyle } = useWallpaper();


  const getConversations = useChatStore((state) => state.getConversations);
  const getMessages = useChatStore((state) => state.getMessages);
  const getUsers = useChatStore((state) => state.getUsers);
  const subscribeToMessages = useChatStore((state) => state.subscribeToMessages);
  const unsubscribeFromMessages = useChatStore((state) => state.unsubscribeFromMessages);

  const { activeConversation, activeConversationId, isLargeScreen } = useSelectedConversation();

  useEffect(() => {
    getUsers();
    getConversations();
  }, [getConversations, getUsers]);


  useEffect(() => {
    if (!activeConversationId) return;

    getMessages(activeConversationId);
    subscribeToMessages(activeConversationId);

    // cleanup
    return () => unsubscribeFromMessages();
  }, [getMessages, activeConversationId, subscribeToMessages, unsubscribeFromMessages]);


  return (
    <div className="flex h-dvh flex-col overflow-hidden p-2 sm:p-3 md:p-8" style={frameStyle}>
      
      <div>
        
      </div>

    </div>
  )
}

export default ChatPage
