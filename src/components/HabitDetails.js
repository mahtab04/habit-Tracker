import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../features/HabitsSlice'

const HabitDetails = ({ habit }) => {
    const dispatch = useDispatch()

    // handlers to change status on click
    // Changes the status of the habit for a particular day to 'done'
    const checkStatusHandler = (info) => {
        dispatch(
            changeStatus({
                title: info[0],
                details: [
                    {
                        day: info[1],
                        status: 'done',
                    },
                ],
            })
        )
    }

    // Changes the status of the habit for a particular day to 'fail'
    const doneStatusHandler = (info) => {
        dispatch(
            changeStatus({
                title: info[0],
                details: [
                    {
                        day: info[1],
                        status: 'fail',
                    },
                ],
            })
        )
    }

    // Changes the status of the habit for a particular day to 'none'
    const failStatusHandler = (info) => {
        dispatch(
            changeStatus({
                title: info[0],
                details: [
                    {
                        day: info[1],
                        status: 'none',
                    },
                ],
            })
        )
    }

    return (
        <Row>
            {/* Loop through each detail object in the habit's details array */}
            {habit.details && habit.details.map((detail) => (
                <Fragment key={detail.day}>
                    <Col>
                        {/* Display the day for the current detail object */}
                        <p className='day-headings'>{detail.day}</p>

                        {/* Display a check mark icon if the habit's status for this day is 'none',
                            and attach an onClick event listener that calls the checkStatusHandler function */}
                        {detail.status === 'none' && (
                            <i
                                className='fa-solid fa-check new'
                                onClick={() => checkStatusHandler([habit.title, detail.day])}></i>
                        )}

                        {/* Display a circle check mark icon if the habit's status for this day is 'done',
                            and attach an onClick event listener that calls the doneStatusHandler function */}
                        {detail.status === 'done' && (
                            <i
                                className=' fa-lg fa-solid fa-circle-check done new'
                                onClick={() => doneStatusHandler([habit.title, detail.day])}></i>
                        )}

                        {/* Display a circle xmark icon if the habit's status for this day is 'fail',
                            and attach an onClick event listener that calls the failStatusHandler function */}
                        {detail.status === 'fail' && (
                            <i
                                className=' fa-lg fa-solid fa-circle-xmark fail new'
                                onClick={() => failStatusHandler([habit.title, detail.day])}></i>
                        )}
                    </Col>
                </Fragment>
            ))}
        </Row>
    )
}

export default HabitDetails
