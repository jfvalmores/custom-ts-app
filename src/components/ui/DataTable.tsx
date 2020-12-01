import { Box } from '@chakra-ui/react';
import * as React from 'react';

type Props = {};

const DataTable: React.FC<Props> = () => {
  return (
    <Box>
      <table>
        <thead>
          <th>Color</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>Red</td>
            <td>Bravery</td>
          </tr>
          <tr>
            <td>Green</td>
            <td>Hope</td>
          </tr>
          <tr>
            <td>Blue</td>
            <td>Peace</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default DataTable;
