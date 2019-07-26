import React from 'react';

import TaskForm from './TaskForm';

class App extends React.Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      task: []
    }
  }
  render(){
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand">{this.props.title}</a>
        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm />
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

interface IProps {
  title?: string;
}

interface Istate {
  task: [];
}

export default App;
