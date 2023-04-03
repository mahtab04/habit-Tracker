import React from 'react'
import CreateHabit from './CreateHabit'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { deleteHabit } from '../features/HabitsSlice'
import { useDispatch, useSelector } from 'react-redux'


const Overview = () => {
    const [modalShow, setModalShow] = React.useState(false)

    const dispatch = useDispatch()
    const { habits } = useSelector((state) => state.allHabits)

    // deleteHabit Handler
    const deleteHandler = (name) => {
        dispatch(deleteHabit(name))
    }

    return (
        <>
            {/* Habits heading */}
            <Row>
                <Col md={2} >
                    <i className='fa-solid fa-calendar-minus'></i>
                </Col>
                <Col md={4} >
                    <h4 className='text-success'>Habits</h4>
                </Col>
            </Row>
            {/* List of habits */}
            <ListGroup>
                {habits.map((habit, index) => (
                    <ListGroup.Item key={index} className='gradient mb-1 rounded habit-container'>
                        <Row>
                            <Col md={2} className='icons'>
                                {' '}
                                <i className='fa-solid fa-feather-pointed me-3 new'></i>
                            </Col>
                            <Col md={8} className='habit-title'>{habit.title}</Col>
                            <Col md={1} className='icons'>
                                <i
                                    className='fa-solid fa-trash me-3 new'
                                    style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onClick={() => deleteHandler(habit.title)}></i>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {/* Add new habit button */}
            <Row>
                <Col className='d-flex justify-content-end'>
                    <Button
                        type='button'
                        className='bg-primary mt-3 mobile'
                        onClick={() => setModalShow(true)}>
                        <i className='fa-solid fa-circle-plus'></i> &nbsp;&nbsp; New Habit
                    </Button>
                    {/* Modal for creating new habit */}
                    <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
            </Row>
        </>
    )
}

export default Overview
