import React, { useState, useEffect} from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
import './Sidebar.css';
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    // when the component loads shoot off a piece of code

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
           )
        );  
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header"> 
            <IconButton>
                <Avatar  src={user?.photoURL}/>
            </IconButton>
            <div className="sidebar__headerRight">
            <IconButton> 
                <DonutLargeIcon />
            </IconButton>
            <IconButton> 
                 <ChatIcon />
             </IconButton>
             <IconButton> 
                <MoreVertIcon />
             </IconButton>
            </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                     <SearchOutlined />
                     <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
        {/* Pass in prop so we could use from SidebarChat */}
        {/* For every room return a SidebarChat component */}
        {/* Retrieving rooms from database */}
            <div className="sidebar__chats">
                    <SidebarChat addNewChat />
                    {rooms.map(room => (
                        <SidebarChat 
                             key ={room.id}
                             id ={room.id}
                             name ={room.data.name} />
                    ))}
            </div>
        </div>
    )
}

export default Sidebar
