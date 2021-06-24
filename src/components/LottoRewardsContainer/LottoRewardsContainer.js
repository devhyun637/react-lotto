import PropTypes from 'prop-types';
import React from 'react';

import { getMatchedCounts, getTotalProfit } from '../../services/winningResult';
import { Button, Flex } from '..';
import { ProfitMessage, Title } from './LottoRewardsContainer.style';
import { RewardTable } from './Table/Table';

export const LottoRewardsContainer = props => {
  const { lottoList, winningNumbers, onClickRestartButton } = props;

  const counts = getMatchedCounts(lottoList, winningNumbers);

  return (
    <>
      <Title id="title-dialog">🏆 당첨 통계 🏆</Title>
      <Flex justifyContent="center" alignItems="center">
        <RewardTable counts={counts} />
      </Flex>

      <ProfitMessage>
        당신의 총 수익률은
        <span>{getTotalProfit(counts).toFixed(2)}</span>
        %입니다.
      </ProfitMessage>

      <Flex justifyContent="center" alignItems="center">
        <Button type="reset" onClick={onClickRestartButton}>
          다시 시작하기
        </Button>
      </Flex>
    </>
  );
};

LottoRewardsContainer.prototype = {
  onClickRestartButton: PropTypes.func,
  lottoList: PropTypes.array.isRequired,
  winningNumbers: PropTypes.object.isRequired,
};
