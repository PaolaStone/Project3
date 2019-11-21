import React from 'react';
import { Table } from 'reactstrap';
import PortsList from './PortsList.json';

const ports = () => JSON.parse(JSON.stringify(PortsList));
console.log("this is Ports Lists" + PortsList[1].SwitchName)

const List = PortsList.map((port, i) => {
  return (
    <div>
        <Table striped>
        <thead>
              <tr>
                <th>Switch </th>
                <th>Port</th>
                <th>Status</th>
                <th>System Name and Port</th>
                <th>System www</th>
                <th>Air Rack</th>
                <th>Air Port</th>
              </tr>
              </thead>
              <tbody>
                <tr key={i}>
                  <td>{PortsList[i].SwitchName}</td>
                  <td>{PortsList[i].Port}</td>
                  <td>{PortsList[i].Status}</td>
                  <td>{PortsList[i].SystemName_Port}</td>
                  <td>{PortsList[i].SystemWWN}</td>
                  <td>{PortsList[i].AirRackName}</td>
                  <td>{PortsList[i].AirRackPort}</td>

                </tr>

              </tbody>

        </Table>
      </div>
  )
})

export default List;
  