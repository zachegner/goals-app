import {useDispatch} from 'react-redux'
import {updateGoal, deleteGoal} from '../features/goals/goalSlice'

function GoalItem({ goal }) {
    const dispatch = useDispatch()

    const updateText = () => {
        goal.text = "Hello"
    }

    return (
        <div className="goal">
            <div>
              {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{goal.text}</h2>
            <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">X</button>
            <button onClick={/* (text) => dispatch(updateGoal(goal._id, text)) */updateText} className='btn btn-center btn-reverse '>Edit</button>
        </div>
    )
}

export default GoalItem