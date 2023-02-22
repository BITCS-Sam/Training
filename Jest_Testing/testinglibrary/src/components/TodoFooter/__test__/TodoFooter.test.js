import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from "react-router-dom"

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

// for (var i = 0; i <= 5; i++) {
// it('should render correct amount of incomplete tasks', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={i} />);
//     const paragraphElement = screen.getByText(`${i} ${i <= 1 ? "task" : "tasks"} left`);
//     expect(paragraphElement).toBeInTheDocument();
// });
// }

it('should render correct amount of incomplete tasks', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
});