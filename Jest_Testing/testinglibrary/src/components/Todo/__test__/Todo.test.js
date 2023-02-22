import { render, screen, fireEvent } from '@testing-library/react'
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom'


const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })


}

describe("AddInput", () => {
    it("should render input element", () => {
        render(<MockTodo />);

        addTask(["Goto Shopping"])

        const divElement = screen.getByText(/Goto Shopping/i)
        expect(divElement).toBeInTheDocument()

    })

    it("should render multiple items", () => {
        render(<MockTodo />);

        addTask(["Goto Shopping", "Goto Pet shop", "Create Web"])

        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3)
    })


    it("tasks should not have completed class when initially render", () => {
        render(<MockTodo />);

        addTask(["Goto Shopping"])

        const divElement = screen.getByText(/Goto Shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    })

    it("tasks should have completed class when clicked", () => {
        render(<MockTodo />);

        addTask(["Goto Shopping"])

        const divElement = screen.getByText(/Goto Shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})