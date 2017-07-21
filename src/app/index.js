console.log("working");

import React from 'react'; //always use in importing react
import { render } from 'react-dom';
import UserTask from './components/userTask';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
injectTapEventPlugin();
// import { Header } from './components/header';
// import { Home } from './components/home';

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             status: 0,
//             editing: false,
//             deleting: false
//         };
//     }
  

//     edit() {
//         this.setState({ editing: true });
//     }

//     delete() {
//         this.setState({ deleting: true });
//         this.props.deleteTaskFromContainer(this.props.index);
//     }

//     save() {
//         this.props.editTaskFromContainer(this.refs.newText.value, this.props.index);
//         this.setState({ editing: false });
//     }

//     renderDefault() {
//         return (
//             <div className='container'>
//                 <div className='commentContainer'>{this.props.text}</div>
//                 <button onClick={this.edit.bind(this)}> Edit</button>
//                 <button onClick={this.delete.bind(this)}> Delete</button>
//             </div>
//         )
//     }

//     renderForm() {
//         return (
//             <div className='container'>
//                 <div>
//                     <textarea ref='newText' defaultValue={this.props.text}></textarea>
//                     <button onClick={this.save.bind(this)}>Save</button>
//                 </div>
//             </div>
//         )
//     }


//     render() {
//       //  const{editTaskFromContainer,deleteTaskFromContainer} = this.props;
//         return (
//             <div className='container'>
//                 {this.state.editing ?
//                     this.renderForm()
//                     :
//                     this.renderDefault()
//                 }
//             </div>

//         );
//     }
// }


//* parent component 
class BoardContainer extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            userTasks : this.props.userTasks,
            output: '8====(.@.)'
        }
    }

    deleteTask(i) {
        let array = this.props.userTasks;
        array.splice(i, 1);
        this.setState({
            userTasks : array
        })
    }

    editTask(itemToEdit,i){
        
         console.log('updating comments' + i);
          console.log(itemToEdit);
           let array = this.props.userTasks;
           array[i] = itemToEdit;
           this.setState({userTasks:array});
    }

    add(newAddedTask){
          let array = this.state.userTasks;
        array.unshift(newAddedTask);
        this.setState({
            userTasks : array
        })
    }

    textChange(){
        setTimeout(()=> {
            this.setState({
                output: '8======(.@.)'
            })
        }, 2000);
         setTimeout(()=> {
            this.setState({
                output: '8=(.@.) '
            })
        }, 2000);
    }

    render() {
        this.textChange();
        return (
            <MuiThemeProvider>
            <div>
                <RaisedButton label="Add Task"  onClick={this.add.bind(this,'New Task')} />
                <div className='boardContainer'>
                    {this.props.userTasks.map((item, i) => {
                        return (
                            <div>
                                 <Divider/>
                            <UserTask key={i}
                                index={i}
                                text={item}
                                editTaskFromContainer={this.editTask.bind(this)}
                                deleteTaskFromContainer={this.deleteTask.bind(this)}
                                output={this.state.output}
                              //  userTasks={this.props.userTasks}
                            />
                           
                            </div>

                        );
                    })}
                </div>
            </div>
             </MuiThemeProvider>

        )
    }
}

BoardContainer.defaultProps = {
    userId:'1738',
    userAge: 27,
    userOccupation:'Boxer',
    userName:'Willie Revilla',
    userTasks:['do the doggie dance',
            'do the chill',
            'sweep the floor']
}


render(<BoardContainer/>, window.document.getElementById('root'));
