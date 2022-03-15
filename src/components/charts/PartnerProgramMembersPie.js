import { countBy } from 'lodash';

import Pie from './Pie';

const PartnerProgramMembersPie = (props) => {
  const data = countBy(
    props.users,
    (user) => !!user.isCreatorPartnerProgramEnrolled
  );

  return (
    <Pie
      data={[
        {
          id: 'In partner program',
          label: 'In partner program',
          value: data[true],
          color: '#4E8098',
        },
        {
          id: 'Not in partner program',
          label: 'Not in partner program',
          value: data[false],
          color: '#9D8189',
        },
      ]}
      title="Those in Medium Partner Program vs not"
    />
  );
};

export default PartnerProgramMembersPie;
