import React, { Component }  from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class TableItem extends Component {
  
  render() {
    const camper = this.props.camper;
    return (
      <TableRow>
          <TableRowColumn>{this.props.rowId+1}</TableRowColumn>
          <TableRowColumn>
              <ListItem disabled={true} leftAvatar={<Avatar src={camper.img}/>}>
                  <a target="_blank" href={"https://www.freecodecamp.com/"+camper.username}>{camper.username}</a>
              </ListItem>
          </TableRowColumn>
          <TableRowColumn>{camper.recent}</TableRowColumn>
          <TableRowColumn>{camper.alltime}</TableRowColumn>
      </TableRow>
    );
  }
}

export default TableItem;
