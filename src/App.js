import React from "react";
import Header from './Components/Header';
import EditorComponent from "./Components/editor";
import SidebarComponent from "./Components/Sidebar";
import { db } from './firebase';
import Signup from "./Components/Signup";
import {Container} from "react-bootstrap";

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

      <Container className = "d-flex align-item-center justify-content-center" style ={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}} >
        <Signup />
        </div>
      </Container>

      <Header />
      
      <SidebarComponent 
        selectedNoteIndex={this.state.selectedNoteIndex}
        notes = {this.state.notes}
        deleteNote = {this.deleteNote}
        selectNote = {this.selectNote}
        newNote = {this.newNote} >
      </SidebarComponent>

      {
          this.state.selectedNote ?
          <EditorComponent selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}></EditorComponent> :
          null
        }
        
    </div>)
  }

 componentDidMount=()=>{
    db
      .collection('notes')
      .onSnapshot(serverUpdate => {
          const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        this.setState({notes: notes});
      });
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote :note });
  noteUpdate = (id, noteObj) => {
    db
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        //timestamp: db.FieldValue.serverTimestamp()
      });
  }
  newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    };
    const newFromDB = await db
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        //timestamp: db.FieldValue.serverTimestamp()
      });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
    this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });
  }

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
    if(this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      this.state.notes.length > 1 ?
      this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    db
      .collection('notes')
      .doc(note.id)
      .delete();
  }
}

export default App;
