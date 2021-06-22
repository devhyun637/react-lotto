import PropTypes from 'prop-types';
import React from 'react';

import {
  getLottoProfitResult,
  getRanks,
} from '../../../services/winningResult';
import { Table } from './Table.style';

export const RewardTable = props => {
  const { counts } = props;

  const profitResults = getLottoProfitResult(getRanks(counts));

  return (
    <Table>
      <thead>
        <tr>
          <th>일치 갯수</th>
          <th>당첨금</th>
          <th>당첨 갯수</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(profitResults).map(({ matchingCount, reward, wins }) => (
          <tr key={matchingCount}>
            <td>{matchingCount}</td>
            <td>{reward}</td>
            <td>
              <span>{wins}</span>개
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

RewardTable.prototype = {
  counts: PropTypes.number.isRequired,
};
