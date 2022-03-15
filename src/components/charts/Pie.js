import { ResponsivePie } from '@nivo/pie';
import { Text, Flex } from '@chakra-ui/react';

const Pie = (props) => {
  const { data, title } = props;

  return (
    <Flex
      direction="column"
      height={240}
      width={480}
      pb="20px"
      alignItems="center"
    >
      <ResponsivePie
        data={data}
        colors={data[0].color ? { datum: 'data.color' } : { scheme: 'nivo' }}
        margin={{ top: 40, right: 80, bottom: 20, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#2F2F2F"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
      />
      <Text justifySelf="flex-end" fontSize={14} fontWeight="semibold">
        {title}
      </Text>
    </Flex>
  );
};

export default Pie;
