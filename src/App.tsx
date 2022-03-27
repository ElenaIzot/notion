import React from 'react';
import 'antd/dist/antd.css';
import Notes from './pages/Notes/Notes';
import { Divider, PageHeader, Typography } from 'antd';
import { state } from './pages/Notes/dataForNotes';
import './app.scss'

function App(): JSX.Element {
  const { Text } = Typography;

  return (
    <div className="app">
      <PageHeader
        className="site-page-header"
        title="Notes"
        subTitle="List notes"
      />
       <Divider />
      <div className="app__notes" >
        <Notes documentState={state} />
      </div>
    </div>
  );
}

export default App;
