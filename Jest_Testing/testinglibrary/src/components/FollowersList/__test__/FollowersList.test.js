import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowerList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("Follower List", () => {

    beforeEach(() => {
        console.log("Running before each test")
    })

    beforeAll(() => {
        console.log("Running before all tests")
    })

    afterEach(() => {
        console.log("Running after each test")
    })

    afterAll(() => {
        console.log("Running after all tests")
    })


    it('should render first card', async () => {
        render(<MockFollowerList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    it('should render first card', async () => {
        render(<MockFollowerList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

    it('should render first card', async () => {
        render(<MockFollowerList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });

})
