import {MAKE_GUESS, TOGGLE_INFO_MODAL, NEW_GAME} from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export  default (state=initialState, action) => {
  if(action.type === MAKE_GUESS) {
    const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }
        
        state = Object.assign({}, state, {
        feedback,
        guesses: state.guesses.concat(action.guess)
      });
      return state
    }

  else if(action.type === NEW_GAME) {
    state = Object.assign({}, initialState, {
      correctAnswer: action.correctAnswer
    });
    return state
  }

  else if(action.type === TOGGLE_INFO_MODAL) {
    state = Object.assign({}, state, {
      showInfoModal: !action.showInfoModal
    });
    return state;
  }
  return state;
}





