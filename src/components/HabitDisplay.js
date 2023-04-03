import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HabitDetails from './HabitDetails'

const HabitDisplay = () => {
    // Get the habits from the Redux store
    const { habits } = useSelector((state) => state.allHabits)

    return (
        <div className='mt-4 '>
            {/* Loop through each habit in the habits array */}
            {habits.map((habit, index) => (
                <ListGroup.Item key={index} className='mb-3 rounded gradient1 '>
                    <p>
                        {/* Display the habit's title and description */}
                        <strong>{habit.title}</strong>&nbsp; :&nbsp; <i>{habit.description}</i>
                    </p>

                    {/* Render the HabitDetails component for the current habit */}
                    <HabitDetails key={habit.title} habit={habit} />
                </ListGroup.Item>
            ))}
        </div>
    )
}

export default HabitDisplay
