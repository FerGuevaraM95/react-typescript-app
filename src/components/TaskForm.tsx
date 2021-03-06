import React from 'react';

class TaskForm extends React.Component<any, any> {

    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('saving...');
    }

    render() {
        return(
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Task Title"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Task Description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Save
                    </button>
                </form>
            </div>
        );
    }

}


export default TaskForm;