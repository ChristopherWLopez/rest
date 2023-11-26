import React, {useState} from 'react';

import './App.scss';
// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import OpenAI from 'openai';

const App=()=>{

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({ method:'', params: ''});

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }

  function callApi  (requestParams) {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data, requestParams);
    setRequestParams(requestParams);
  }

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        {console.log(requestParams)}
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <OpenAI/>
        <Footer />
      </React.Fragment>
    );
  }

  //comments so I can commit. I am having a very hard time focusing right now, so i spent time looking at this code But I am spent!

export default App;
