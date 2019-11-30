import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            <td>{this.props.obj.SwitchName}</td>
            <td>{this.props.obj.Status}</td>
            <td>{this.props.obj.SystemName_Port}</td>
            <td>{this.props.obj.SystemWWN}</td>
            <td>{this.props.obj.AirRackName}</td>
            <td>{this.props.obj.AirRackPort}</td>
        </tr>
    )

}

export default TableRow;