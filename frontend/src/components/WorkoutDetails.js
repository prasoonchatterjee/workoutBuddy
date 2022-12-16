import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleDelete = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    });
    if (response.ok) {
      const json = await response.json();
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
