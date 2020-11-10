import React from "react";
import EditorComponent from "./Components/editor";
import Header from './Components/Header';
import SidebarComponent from "./Components/Sidebar";
//import 'firebase/firestore';
//const firebase = require('firebase');

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes:null
    };
  }

  render(){
    return(
    <div className="app-container">
      <Header />

      <SidebarComponent 
        selectedNoteIndex={this.state.selectedNoteIndex}>
        notes = {this.state.notes}
      </SidebarComponent>
      <EditorComponent></EditorComponent>
    </div>)
  }

// componentDidMount=()=>{
  //  firebase
   //   .firestore()
   //   .collection('notes')
   //   .onSnapshot(serverUpdate => {
   //     const notes = serverUpdate.docs.map(_doc => {
   //       const data = _doc.data();
   //       data['id'] = _doc.id;
   //       return data;
    //    });
    //    this.setState({notes: notes});
    //  });
 // }

}

export default App;
