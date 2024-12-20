import React, { useEffect, useState } from 'react';
import { GridItem, Grid, Table } from '@chakra-ui/react';
import Stopwatch from './Stopwatch';
import { db } from '../db';

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
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let ses = await db.sessions.toArray();
      await console.log(ses, "Sessions");
      setSessions(ses);
    };
    getData();
  }, []);

  const addNewSession = async (obj) => {
    console.log(obj);
    let id = await db.sessions.add(obj);
    console.log(id);
    getAllSessions();
  }

  const getAllSessions = async () => {
    let ses = await db.sessions.toArray();
    await console.log(ses, "Sessions");
    setSessions(ses);
  };

  return (
    <div>
      <Grid height="90vh" templateRows="repeat(8, 2fr)" gap="2">
        <GridItem rowSpan={3} bg="cyan.299">
          <Stopwatch addNewSession={addNewSession} />
        </GridItem>
        <GridItem rowSpan={5}>
          <Table.ScrollArea borderWidth="1px" rounded="md" height="100%">
            <Table.Root size="sm" variant="outline" stickyHeader striped _even={{ backgroundColor: 'red' }}>
              <Table.Header bg="transparent">
                <Table.Row>
                  <Table.ColumnHeader >Date</Table.ColumnHeader>
                  <Table.ColumnHeader minW="4px">SessionType</Table.ColumnHeader>
                  <Table.ColumnHeader minW="4px">Duration</Table.ColumnHeader>
                  <Table.ColumnHeader minW="4px">Start Time</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sessions.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell maxW="180px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">{item.date}</Table.Cell>
                    <Table.Cell>{item.sessionType}</Table.Cell>
                    <Table.Cell>{item.duration}</Table.Cell>
                    <Table.Cell>{item.startTime}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </GridItem>
      </Grid>
    </div>
  );
};

Home.propTypes = {

};

export default Home;