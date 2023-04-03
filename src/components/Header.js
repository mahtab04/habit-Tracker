import { Nav, Container } from 'react-bootstrap'

const Header = () => {
    const date = new Date()
    return (
        /* The Nav component is used to create a navigation bar at the top of the page */
        <Nav className='bg-primary p-2 background'>
            <Container className='d-flex justify-content-between align-items-center'>
                {/* The habit tracker title is displayed in a bold font */}
                <h3 className='fw-bold text-white'>Habit Tracker</h3>
                {/* The current date is displayed next to the title */}
                <span className='text-white'>{date.toDateString()}</span>
            </Container>
        </Nav>
    )
}

export default Header
