import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todoItem, idx) => {
        console.log(todoItem, idx);

        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'completed' ? 'new' : 'completed'
        }

        setTodoList(newTodoList);
    }

    const handleShowAllTodoList = () => {
        setFilterStatus('all');
    }

    const handleShowCompletedTodoList = () => {
        setFilterStatus('completed');
    }

    const handleShowNewTodoList = () => {
        setFilterStatus('new');
    }

    const renderFilterStatus = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderFilterStatus} onTodoClick={handleTodoClick}></TodoList>
            <div>
                <button onClick={handleShowAllTodoList}>Show All</button>
                <button onClick={handleShowCompletedTodoList}>Show Completed</button>
                <button onClick={handleShowNewTodoList}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;