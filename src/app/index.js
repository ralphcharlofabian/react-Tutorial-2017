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
import DatePicker from 'material-ui/DatePicker';
import ContentAdd from 'material-ui/svg-icons/content/add';


export const cyan400 = '#26c6da';
export const cyan100 = '#b2ebf2';
export const cyanA100 = '#84ffff';
export const lightBlue300 = '#4fc3f7';
export const teal200 = '#80cbc4';
export const grey50 = '#fafafa';
injectTapEventPlugin();

 const styles = {
    paddingleftRight:
        {
             display:'flex',
            justifyContent:'center',
            paddingLeft: '10%',
            paddingRight:'10%',
            paddingTop:'2%',
            margin: '5%'},
    background:{
            backgroundColor:grey50
        },
    center:{
        display:'flex',
        justifyContent:'center'
    },
    paddingTaskCard:{
         display:'flex',
            justifyContent:'center',
            paddingLeft: '20%',
            paddingRight:'20%',
            paddingTop:'2%',
            margin: '5%'},
    marginBottom:'10%',
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
                <Card style={styles.background} >
                         <Divider/>
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
                            
                             
                            <div className='boardContainer'>
                                <Card style={styles.paddingleftRight}>
                                    <CardMedia>
                                       
                                    </CardMedia>
                                </Card>
                                 
                            </div>
                        </CardMedia>
                        
                      
                <Divider />
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
                            
                             
                            <div className='boardContainer'>
                                <Card style={styles.paddingleftRight}>
                                    <CardMedia>
                                        <RaisedButton label="Add Task"  onClick={this.add.bind(this,'New Task')} />
                                {this.props.userTasks.map((item, i) => {
                                    return (
                                        <div>

                                            <UserTask key={i}
                                                index={i}
                                                text={item}
                                                editTaskFromContainer={this.editTask.bind(this)}
                                                deleteTaskFromContainer={this.deleteTask.bind(this)}
                                                output={this.state.output}
                                                style={styles.paddingTaskCard}
                                            />

                                        </div>

                                    );
                                })}
                                    </CardMedia>
                                </Card>
                                 
                            </div>
                        </CardMedia>
                        
                        <CardActions>
                            <DatePicker hintText="Date Set" mode="landscape" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </Card>
                
               
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
            'Study react and Redux',
            'Watch youtube tutorials']
}


render(<BoardContainer/>, window.document.getElementById('root'));
