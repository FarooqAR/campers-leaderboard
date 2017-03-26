import React, { Component }  from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import List from '../List/List';
import './App.css';


const styles = {
  AppBar: {
    'backgroundColor': '#43A047'
  },
  title:{
    'textAlign':'center'
  },
  iconLeft: {
    'display':'none'
  },
  loaderVisible:{
    'visibility':'visible',
    'opacity':'1'
  },
  loaderHidden:{
    'visibility':'hidden',
    'opacity':'0'
  }

}
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AppBar 
          style={styles.AppBar}
          title={<div style={styles.title}>Campers Leaderboard</div>}
          iconStyleLeft={styles.iconLeft}
          iconElementRight={<CircularProgress style={this.props.isLoading ? styles.loaderVisible : styles.loaderHidden}  size={35} color="white"/>}
        />
        <List />
      </div>
    );
  }
}
function mapStateToProps(state){
  return {isLoading: state.campersInfoIsLoading}
}
export default connect(mapStateToProps)(App);