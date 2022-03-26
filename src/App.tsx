import React from 'react';
import 'antd/dist/antd.css'; 
import Notes from './pages/Notes/Notes';
import { PageHeader } from 'antd';
import { state } from './pages/Notes/dataForNotes';

function App(): JSX.Element {
  return (
    <div className="App">
       <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Notes"
            subTitle="List notes"
        />
      <Notes documentState={state}/>
    </div>
  );
}

export default App;
