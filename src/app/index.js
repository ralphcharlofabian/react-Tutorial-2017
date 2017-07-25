console.log("working");

import React from 'react'; //always use in importing react
import { render } from 'react-dom';
import UserTask from './components/userTask';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
injectTapEventPlugin();

 const styles = {
    paddingleftRight:
        {paddingLeft: '20%',
        paddingRight:'20%',
        margin: 12,}
 }

//* parent component 
class BoardContainer extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            userTasks : this.props.userTasks
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

  

    render() {
      
        return (
            <MuiThemeProvider>
            <div style={styles.paddingleftRight}>
                <Card >
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar="images/jsa-128.jpg"
                        />
                        
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                         </CardText>
                        <CardMedia >
                             <RaisedButton label="Add Task"  onClick={this.add.bind(this,'New Task')} />
                            <div className='boardContainer'>
                                {this.props.userTasks.map((item, i) => {
                                    return (
                                        <div>

                                            <UserTask key={i}
                                                index={i}
                                                text={item}
                                                editTaskFromContainer={this.editTask.bind(this)}
                                                deleteTaskFromContainer={this.deleteTask.bind(this)}
                                                output={this.state.output}
                                            />

                                        </div>

                                    );
                                })}
                            </div>
                        </CardMedia>
                        
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </Card>
               
                <Divider/>
               
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
    userTasks:['Read Books about Javascript',
            'Do comissioned artworks',
            'Do the Jekyll',
            'Chill AF']
}


render(<BoardContainer/>, window.document.getElementById('root'));

// class UserList extends React.Component{

//         constructor(props){
//         super(props);
//         this.state = {
//             UserInfo : this.props.UserList
//         }
//     }
    
//          render() {
//       console.log(this.props.UserList)
//         return (
            
//             <MuiThemeProvider>
//             <div>
                
//                 {/* //<RaisedButton label="Add Task"  onClick={this.add.bind(this,'New Task')} /> */}
//                 <div className='userList'>
//                     {/* {this.props.UserList.map((item, i) => {
                       
//                         return (
//                            console.log(this.props.UserList)

//                         );
//                     })} */}
//                 </div>
//             </div>
//              </MuiThemeProvider>

//         )
//     }

// }

// UserList.defaultProps =[{
//     userId:'1738',
//     userAge: 27,
//     userOccupation:'Driver',
//     userName:'Willie Revilla',
//     userTasks: [{
//         taskInfo: 'clean the car',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'heat the car engine',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'drive',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }]
// },{
//     userId:'1813',
//     userAge: 35,
//     userOccupation:'Security Personel',
//     userName:'Randy Batista',
//     userTasks:[{
//         taskInfo: 'Secure the house',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo:  'Do night shift guarding',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'Initialize Identity checking',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'Secure Peace and Order',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }]
// },{
//     userId:'222',
//     userAge: 25,
//     userOccupation:'Cook',
//     userName:'Chief Logro',
//     userTasks: [{
//         taskInfo: 'Lead the Kitchen cooking',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'Buy ingridients',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'Prepare Food',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }, {
//         taskInfo: 'Head Count for Visitors',
//         taskDateFrom: '3/27/2017',
//         taskDateTo: '8/3/2017',
//         Status: false
//     }]
// }
// ]
// render(<UserList/>, window.document.getElementById('root'));