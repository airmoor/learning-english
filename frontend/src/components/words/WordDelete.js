import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layout/Modal';
import history from '../../history';
import { getWord, deleteWord } from '../../actions/words';

class WordDelete extends React.Component {
  componentDidMount() {
    this.props.getWord(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.word) {
      return 'Are you sure you want to delete this word?';
    }
    return `Are you sure you want to delete the word: ${this.props.word.word}?`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteWord(id)}
          className='ui orange button'
        >
          Delete
        </button>
        <Link to='/' className='ui cancel button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal 
        title='Delete Word'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  word: state.words[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getWord, deleteWord }
)(WordDelete);
