import ProfileIconOutline from '@material-ui/icons/PersonOutline';
import ProfileIconFilled from '@material-ui/icons/Person';
import ProjectIconOutline from '@material-ui/icons/WorkOutline';
import ProjectIconFilled from '@material-ui/icons/Work';

export default {
  Profile: {
    InactiveIcon: ProfileIconOutline,
    ActiveIcon: ProfileIconFilled,
    linkTo: 'profile',
  },

  Projects: {
    InactiveIcon: ProjectIconOutline,
    ActiveIcon: ProjectIconFilled,
    linkTo: 'projects',
  },
};
