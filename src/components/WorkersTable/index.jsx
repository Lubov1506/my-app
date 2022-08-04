import React, { Component } from 'react';
import WorkerList from '../WorkerList';

class WorkerTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            workers: [
                {
                    id: 1,
                    firstName: 'Ivan',
                    lastName: 'Ivanov',
                    days: 5,
                    rate: 100
                },
                {
                    id: 2,
                    firstName: 'Petro',
                    lastName: 'Petrov',
                    days: 3,
                    rate: 150
                },
                {
                    id: 3,
                    firstName: 'Kolya',
                    lastName: 'Nykolaev',
                    days: 10,
                    rate: 20
                }
            ]
        }
    }

    render() {
        const {workers} = this.state
        return (
<WorkerList workers={workers}/>
        );
    }
}

export default WorkerTable;
