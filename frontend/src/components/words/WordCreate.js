import React from 'react';
import { connect } from 'react-redux';
import { addWord } from '../../actions/words';
import WordForm from './WordForm';

class WordCreate extends React.Component {
  constructor(props) {
    super(props); 
    this.handleClick = this.handleClick.bind(this);
    this.state = {isHidden: true};
  }

  onSubmit = formValues => {
    this.props.addWord(formValues);
  };

  handleClick() {
    this.setState(state => ({isHidden: !state.isHidden}));
  }

  render() {
    const isHidden = this.state.isHidden;
    return (
      <div className='ui segment'>
        <div className='ui grid'>
          <div className='four wide column'>
            <button onClick={this.handleClick} className='ui teal big button '>
              {isHidden ? 'show form' : 'hide form'}
            </button>
          </div>

          <div className='eight wide column'>
            <h1 className='ui teal center aligned header'>Add new word</h1>
          </div>
          
        </div>

        {!isHidden && <WordForm destroyOnUnmount={false} onSubmit={this.onSubmit} />}
      </div>
    );
  }
}

export default connect(
  null,
  { addWord }
)(WordCreate);
