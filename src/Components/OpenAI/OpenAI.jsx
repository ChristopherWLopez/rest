import React, { useCallback, useState } from 'react'

    const makeOpenAIRequest = async (content)=>{
        const org = process.env.REACT_API_OPENAI_ORG;
        const key = process.env.REACT_API_OPENAI_KEY;
        const url = "http://api.openai.com/v1/chat/complete";

        const message = {
            model: "gpt-3.5-turbo",
            messages: [{role: "user, content "}],
        };

        //make fetch happen
        const response = await fetch( url, {
            method: "POST",
            headers:{
                'Authorization': `Bearer ${key}`,
                'OpenAI-Organization': `${org}`
            },
            body: JSON.stringify(message),
        });

        if(response.ok){
      
        const responseJson = await response.json();
        console.log(responseJson);

        return responseJson.choices[0].message.content;
    } else{
        const error = await response.text();
        return `${response.status} ${response.statusText} ${error}`;
    }
}

const OpenAI = () => {
    const [prompt, setPrompt] = useState('');
    const [chat, setChat] = useState('');

    const makeFetchHappen = useCallback(async()=>{
        const response = await makeOpenAIRequest(prompt);
        setChat(response);
    },[prompt]);

  return (
    <>
      <h2>OpenAi</h2>
      <label>
        Ask Chat:
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
      </label>
      <button onClick={makeFetchHappen}>Chat!</button>
      <div>{chat}</div>
    </>
  )
}

export default OpenAI;
