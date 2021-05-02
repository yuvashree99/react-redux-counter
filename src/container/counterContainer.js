import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset } from '../actions';

const mapState = (state) => {
   return {
      counter: state
   };
};
const mapDispatch = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapState, mapDispatch)(Counter);