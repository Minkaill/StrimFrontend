import Dropdown from 'react-bootstrap/Dropdown';

const DropSize = () =:{
  return (
    <Dropdown>
      <Dropdown.Toggle variant="string" id="dropdown-basic">
        XL
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">XXL</Dropdown.Item>
        <Dropdown.Item href="#/action-2">XXXL</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropSize;