import './app.css';
import Container from "../Container/Container.jsx";
import Title from "../Title/Title.jsx";
import Form from "../Form/Form.jsx";
import {useState} from "react";
import TodoList from "../TodoList/TodoList.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <div className={'app'}>
            <Container>
                <div className={'title-wrap'}>
                    <Title>Todo</Title>
                </div>

                <div className={'form-wrap'}>
                    <Form
                        saveTodo={
                            (todoText) => {
                                const trimmedText = todoText.trim();
                                if (trimmedText.length > 0) {
                                    setTodos([...todos, trimmedText]);
                                }
                            }
                        }
                    />
                </div>

                <TodoList
                    todos={todos}
                    removeTodo={
                        (todoIndex) => {
                            const newTodos = todos.filter((_, index) => index !== todoIndex);
                            setTodos(newTodos);
                        }
                    }
                />
            </Container>
        </div>
    );
}

export default App;