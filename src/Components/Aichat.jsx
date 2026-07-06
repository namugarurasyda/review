import React, { useReducer, useState } from 'react';

import { Outlet, Link } from 'react-router-dom';



 const [chatInput, setChatInput] = useState('');

 useEffect(() => {
    const outputDiv = document.getElementById('chat-output');
    outputDiv.innerText = ""; // Clear previous output
  }, [chatInput]);

  useEffect(() => { 
     const outputDiv = document.getElementById('chat-output');
    outputDiv.innerText = ""; // Clear previous output

  },[]);


  const [chatOutput, setChatOutput] = useReducer(
    (state, newOutput) => [...state, newOutput],
    []
  );

export async function startAIStream( chatInput ) {
  const outputDiv = document.getElementById('chat-output');
  outputDiv.innerText = ""; 

  
  // Setup AbortController to allow canceling the stream
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch('http://localhost:3000', { signal });
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      
      // Decode the buffer chunk into text and append it to the UI
      const chunk = decoder.decode(value, { stream: true });
      outputDiv.innerText += chunk;
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      outputDiv.innerText += "\n[Generation Stopped by User]";
    } else {
      console.error("Stream error:", error);
    }
  }
}