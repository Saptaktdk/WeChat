import { 
    createContext, 
    useContext, 
    useState,
    useEffect, 
} from 'react';
import { useHistory } from 'react-router-dom';


const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const history = useHistory("/chats");

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      console.log("userInfo: " , userInfo);

      if (!userInfo) {
        history.push('/');
      }
    }, [history]);

    /* const updateUser = () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        console.log("userInfo", userInfo);

        if (!userInfo) {
            history.push('/');
        }
      }; */
    
    
    return (
        <ChatContext.Provider value={{ user }}>
            {children}
        </ChatContext.Provider>
    )
};

export const ChatState = () => {
    return useContext(ChatContext);
}


export default ChatProvider;