import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWords, deleteWord } from '../../actions/words';

class WordList extends React.Component {
  componentDidMount() {
    this.props.getWords();
  }

  render() {
    return (
      <div className='ui segment'>
       <h1 className='ui center aligned teal header'>Word list</h1>  
        <div className='ui cards' >
          {this.props.words.map(word => (
            <div className='ui centered card' key={word.id} >
              <div className='content' >
                <div className='header center aligned'>{word.word} </div>
                <div className='meta center aligned'>{word.transcription} </div>
                <div className='description center aligned'>{word.definitions} </div>
                <div className='description center aligned'>{word.translations} </div>
                <div className='description center aligned'>{word.examples} </div>
              </div>
              <div className='extra content'>
                <div className='ui two buttons'>
                  <Link 
                    to={`/edit/${word.id}`} 
                    className='ui basic teal button'>
                      Edit
                  </Link>

                  <Link
                    to={`/delete/${word.id}`} 
                    className='ui basic orange button'>
                      Delete 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: Object.values(state.words)
});

export default connect(
  mapStateToProps,
  { getWords, deleteWord }
)(WordList);
