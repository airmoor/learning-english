import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getWord, editWord } from '../../actions/words';
import WordForm from './WordForm';

class WordEdit extends React.Component {
  componentDidMount() {
    this.props.getWord(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editWord(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className='ui five column centered grid'>
        <div className='column '>
          <h2 style={{ marginTop: '2rem' }}>Edit Word</h2>
          <WordForm
            initialValues={_.pick(this.props.word, 
            ['word', 'transcription', 'definitions', 'translations', 'examples'])}
            enableReinitialize={true}
            onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  word: state.words[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getWord, editWord }
)(WordEdit);
