import React from 'react';

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
