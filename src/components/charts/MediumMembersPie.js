import { countBy } from 'lodash';
import Pie from './Pie';

const MediumMembersPie = (props) => {
  const data = countBy(props.users, (user) => !!user.mediumMemberAt);

  return (
    <Pie
      data={[
        {
          id: 'Medium member',
          label: 'Medium member',
          value: data[true],
          color: '#4E8098',
        },
        {
          id: 'Not Medium member',
          label: 'Not Medium member',
          value: data[false],
          color: '#9D8189',
        },
      ]}
      title="Medium members vs non-members"
    />
  );
};

export default MediumMembersPie;
