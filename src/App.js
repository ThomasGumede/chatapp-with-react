import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username'))  return <LoginForm />

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="c1b277e9-6d1c-48f1-aed4-81d955ee5622"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  )
}

export default App
