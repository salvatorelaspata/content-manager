import { DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow } from 'carbon-components-react';
import React from 'react';
import css from './Home.module.css';
import { headerData, rowData } from './sampleData';
// import { headerData, rowData } from './sampleData.';
interface HomeProp { }

const Home: React.FC<HomeProp> = () => {
    return (
        <div className={css.root}>
            <DataTable rows={rowData} headers={headerData} isSortable >
                {({ rows, headers, getHeaderProps, getTableProps }: any) => (
                    <TableContainer title="DataTable">
                        <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                    {headers.map((header: any) => (
                                        <TableHeader {...getHeaderProps({ header })}>
                                            {header.header}
                                        </TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row: any) => (
                                    <TableRow key={row.id}>
                                        {row.cells.map((cell: any) => (
                                            <TableCell key={cell.id}>{cell.value}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </DataTable>
        </div>
    );
};

export default Home;
