import React from "react";
import DataTable from "./DataTable";

const data = [{
  key: '1',
  name: 'John',
  id: 32,
  phone: '2234567892',
  tags: ['nice', 'developer'],
  email: 'email@mail.com',
  active: 'true'
}, {
  key: '2',
  name: 'Jim',
  id: 42,
  phone: '2234567892',
  email: 'email@mail.com',
  tags: ['loser'],
  active: 'true'
}, {
  key: '3',
  name: 'Joe',
  email: 'email@mail.com',
  id: 32,
  phone: '2234567892',
  tags: ['cool', 'teacher'],
  active: 'false'
}];


export default () => (
    <React.Fragment>
        <DataTable data={data} />
    </React.Fragment>
)
