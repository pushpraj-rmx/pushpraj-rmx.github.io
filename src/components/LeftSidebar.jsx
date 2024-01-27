import Counter from '../games/Counter';

function LeftSidebar() {
    return (
        <>
            
            <div className="left-sidebar">
                <h5>Navigation</h5>
                <a href="">Link One</a>
                <a href="">Link Two</a>
                <a href="">Link Three</a>
                <a href="">Link Four</a>
                <a href="">Link Five</a>
                <h4>Games</h4>
                <Counter />
            </div>
        </>

    );
}

export default LeftSidebar;