import React from 'react';
import WordCreate from './WordCreate';
import WordList from './WordList';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <WordCreate />
        <WordList />
      </div>
    );
  }
}

export default Dashboard;
