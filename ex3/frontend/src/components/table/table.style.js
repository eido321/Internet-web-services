import styled from 'styled-components';

const TableContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 20px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid #ccc;
`;

const TableCell = styled.div`
  padding: 10px;
`;

const HeaderCell = styled(TableCell)`
  font-weight: bold;
`;

export  {TableContainer, TableRow, TableCell, HeaderCell};
