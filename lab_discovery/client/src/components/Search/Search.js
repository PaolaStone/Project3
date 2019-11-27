import React from 'react';
import { Form, Input } from 'reactstrap';

const SearchBy = (props) => {
  return (
    <Form>
        <Input type="select" bsSize="df">
            <option> Search by System Name </option>
            <option> Search by wwn </option>
        </Input>
      
    </Form>
  );
}

export default SearchBy;
