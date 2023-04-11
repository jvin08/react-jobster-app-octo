import StatItem from './StatItem';
import { AiFillLike, AiTwotoneBug, AiFillBank } from 'react-icons/ai';
import Wrapper from '../assets/wrappers/StatsContainer';
import { useSelector } from 'react-redux';

const StatsContainer = () =>{
  const { stats } = useSelector((store)=>store.allJobs)

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <AiFillBank />,
      color: '#fbf92a',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <AiFillLike />,
      color: '#1adbe3',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <AiTwotoneBug />,
      color: '#f53434',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item,index)=>{
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer;