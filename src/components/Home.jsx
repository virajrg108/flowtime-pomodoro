import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Link, GridItem, Grid, Table } from '@chakra-ui/react';

const tableData = [
  {
    id: 0,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 1,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 2,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 3,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 4,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 5,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 6,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 7,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 8,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 9,
    activity: 'Refactordfdfdfd Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
  {
    id: 10,
    activity: 'Refactor Code and debug it unless its ok',
    duration: '20min',
    start: '02:31 PM',
    end: '03:51 PM'
  },
]


const Home = props => {
  return (
    <div>
      <Tabs.Root variant="line" height="90vh" fitted defaultValue="flowtime">
        <Tabs.List>
          <Tabs.Trigger value="flowtime" asChild>
            <Link unstyled href="#flowtime">
              FlowTime
            </Link>
          </Tabs.Trigger>
          <Tabs.Trigger value="history-tab" asChild>
            <Link unstyled href="#history-tab">
              History
            </Link>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="flowtime" bg="cyan.200">
          <Grid height="90vh" templateRows="repeat(8, 2fr)" gap="2">
            <GridItem rowSpan={3}>
              <Table.ScrollArea borderWidth="1px" rounded="md" height="100%">
                <Table.Root size="sm" variant="outline" stickyHeader striped _even={{ backgroundColor: 'red' }}>
                  <Table.Header bg="transparent">
                    <Table.Row>
                      <Table.ColumnHeader >Activity</Table.ColumnHeader>
                      <Table.ColumnHeader minW="4px">Duration</Table.ColumnHeader>
                      <Table.ColumnHeader minW="4px">Start</Table.ColumnHeader>
                      <Table.ColumnHeader minW="4px">End</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {tableData.map((item) => (
                      <Table.Row key={item.id}>
                        <Table.Cell maxW="180px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">{item.activity}</Table.Cell>
                        <Table.Cell>{item.duration}</Table.Cell>
                        <Table.Cell>{item.start}</Table.Cell>
                        <Table.Cell>{item.end}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Table.ScrollArea>
            </GridItem>
            <GridItem rowSpan={5} bg="red">
              Hi
            </GridItem>
          </Grid>
        </Tabs.Content>
        <Tabs.Content value="history-tab">Manage your projects</Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

Home.propTypes = {

};

export default Home;