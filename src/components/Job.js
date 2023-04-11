import { TbLocationFilled, TbBriefcase } from 'react-icons/tb';
import { IoCalendarSharp,  } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import moment from 'moment';
import { deleteJob, setEditJob } from '../features/jobs/jobSlice';


const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format('L');
  //2023-03-18T15:52:59.690Z
  return <Wrapper>
    <header>
      <div className='main-icon'>
        {position.charAt(0)}
      </div>
      <div className='info'>
        <h5>{position}</h5>
        <p>{company}</p>
        
      </div>
    </header>
    <div className='content'>
      <div className='content-center'>
        <JobInfo icon={<TbLocationFilled/>} text={jobLocation}/>
        <JobInfo icon={<IoCalendarSharp/>} text={date}/>
        <JobInfo icon={<TbBriefcase/>} text={jobType}/>
        <div className={`status ${status}`}>{status}</div>
      </div>
      <footer>
        <div className='actions'>
          <Link 
          to='/add-job' 
          className='btn edit-btn' 
          onClick={()=>dispatch(setEditJob({
            editJobId:_id,
            position,
            company,
            jobLocation,
            jobType,
            status,
          }))}
          >
            Edit
          </Link>
          <button type='button' className='btn delete-btn' onClick={()=>dispatch(deleteJob(_id))}>Delete</button>
        </div>
      </footer>
    </div>
  </Wrapper>
}

export default Job;