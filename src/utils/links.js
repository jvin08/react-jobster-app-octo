import { SlGrid } from 'react-icons/sl';
import { BiStats } from 'react-icons/bi';
import { HiPlusSmall } from 'react-icons/hi2';
import { BsFileEarmarkPerson } from 'react-icons/bs';


const links = [
  {
    id:1,
    text:'all-jobs',
    path: '/',
    icon: <SlGrid />
  },
  {
    id:2,
    text:'stats',
    path: 'stats',
    icon: <BiStats />
  },
  {
    id:3,
    text:'add job',
    path: 'add-job',
    icon: <HiPlusSmall />
  },
  {
    id:4,
    text:'profile',
    path: 'profile',
    icon: <BsFileEarmarkPerson />
  },
]

export default links;