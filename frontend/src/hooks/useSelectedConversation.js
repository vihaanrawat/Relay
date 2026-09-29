import { useMediaQuery } from "./useMediaQuery";
import { formatMessageTime } from "../lib/utils"
import { useChatStore } from "../store/useChatStore"
import { useAuthStore } from "../store/useAuthStore";

// John Doe -> JD
export function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((namePart) => namePart[0])
    .join("");
}