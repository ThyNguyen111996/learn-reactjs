import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames'

TodoList.propTypes = {
    todoListL: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todoItem, idx) => {
        if (!onTodoClick) return

        onTodoClick(todoItem, idx);
    }
    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;