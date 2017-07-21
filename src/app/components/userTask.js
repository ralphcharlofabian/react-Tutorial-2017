import React from 'react'; //always use in importing react
import { render } from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
// import { Header } from './header';
// import { Home } from './home';
const style = {
  margin: 12,
};
class UserTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            editing: false,
            deleting: false,
             autoHideDuration: 4000,
              message: 'New Task Added',
             open: false
        };
    }
  

    edit() {
        this.setState({ editing: true });
    }

    delete() {
        this.setState({ deleting: true });
        this.props.deleteTaskFromContainer(this.props.index);
    }

    save() {
        const {newText} = this.refs;
        console.log(newText);
        this.props.editTaskFromContainer(newText.input.value, this.props.index);
        this.setState({ 
            editing: false,
            open: true
         });
    }

    closeSnackBar(){
        this.setState({
      open: false,
    });
    }
    renderDefault() {
        return (
            <div className='container'>
                <div className='commentContainer'>{this.props.text}</div>
               
                 <RaisedButton label="Edit Task"  primary={true} onClick={this.edit.bind(this)} style ={style}/>
                  <RaisedButton label="Delete Task"  secondary={true}onClick={this.delete.bind(this)} style ={style}/>
            </div>
        )
    }
// <textarea ref='newText' defaultValue={this.props.text}></textarea>
    renderForm() {
        return (
            <div className='container'>
                <div>
                   
                    <TextField
                     ref='newText'
                        hintText={this.props.text}
                        defaultValue={this.props.text}
                        />
                    <RaisedButton label="Save"  primary={true} onClick={this.save.bind(this)} style ={style}/>
                </div>
            </div>
        )
    }


    render() {
        const { output } = this.props;
        return (
            <div className='container'>
                <marquee >{output}</marquee>
                 
                {this.state.editing ?
                    this.renderForm()
                    :
                    this.renderDefault()
                }
                 <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.closeSnackBar.bind(this)}
        />
            </div>

        );
    }
}

export default UserTask;