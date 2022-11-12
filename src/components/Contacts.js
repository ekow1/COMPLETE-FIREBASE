import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@ottoaddo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jerry</td>
          <td>Akaminko</td>
          <td>@loner</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Zinedine </td>
          <td>Zidane</td>
          <td>@white heart</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Nicholas</td>
          <td>Boadi</td>
          <td>@Koti</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;