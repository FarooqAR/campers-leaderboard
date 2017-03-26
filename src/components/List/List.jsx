import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './List.css';
import TableItem from '../TableItem/TableItem';
import {fetchCampersInfo,FETCH_TYPE_ALLTIME,FETCH_TYPE_RECENT} from '../../redux/modules/campersInfo';

export class List extends Component{
    componentDidMount(){
        
        this.props.fetchCampersInfo(FETCH_TYPE_RECENT);
    }
    render(){
        const campersInfo = this.props.campersInfo;
        return (
        <Table >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
            <TableRow >
                <TableHeaderColumn>#</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn onTouchTap={()=> this.props.fetchCampersInfo(FETCH_TYPE_RECENT)}>Points in Past 30 days {this.props.campersInfoFetchType === FETCH_TYPE_RECENT ? '\u25B2' : null}</TableHeaderColumn>
                <TableHeaderColumn onTouchTap={()=> this.props.fetchCampersInfo(FETCH_TYPE_ALLTIME)}>All Time Points {this.props.campersInfoFetchType === FETCH_TYPE_ALLTIME ? '\u25B2' : null}</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {campersInfo && campersInfo.map((camper, i)=>{
                    return (
                        <TableItem camper={camper} key={camper.username} rowId={i}/>
                    );
                })}
            
            </TableBody>
        </Table>
        );
    }
}
function mapStateToProps(state){
    return {
        campersInfo: state.campersInfo,
        campersInfoFetchType: state.campersInfoFetchType
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchCampersInfo}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(List);