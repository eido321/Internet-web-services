import React from 'react';
import { TableContainer, TableRow, HeaderCell, TableCell } from './table.style';
// eslint-disable-next-line react/prop-types
const Table = ({ data }) => {
    return (
        <TableContainer>
            {/* eslint-disable-next-line react/prop-types */}
            {data.map((item, index) => (
                <TableRow key={index}>
                    {Object.entries(item).map(([key, value]) => (
                        <React.Fragment key={key}>
                            <HeaderCell>{key}</HeaderCell>
                            <TableCell>{value}</TableCell>
                        </React.Fragment>
                    ))}
                </TableRow>
            ))}
        </TableContainer>
    );
};

export default Table;
