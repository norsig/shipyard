import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Main from './layout/Main';

function mapStateToProps(state) {
  return {
    user: state.user,
    modals: state.modals,
    info: state.info,
    containers: state.containers,
    events: state.events,
    swarm: state.swarm,
    services: state.services,
    tasks: state.tasks,
    nodes: state.nodes,
    images: state.images,
    networks: state.networks,
    volumes: state.volumes,
    routing: state.routing,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
