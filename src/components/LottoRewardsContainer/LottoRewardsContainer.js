import React from 'react';

import PropTypes from 'prop-types';

import { Flex, Button } from '..';
import { RewardTable } from './Table/Table';

import { getMatchedCounts, getTotalProfit } from '../../services/winningResult';

import { Title, ProfitMessage } from './LottoRewardsContainer.style';

export const LottoRewardsContainer = props => {
  const { lottos, winningNumbers, onClick } = props;

  const counts = getMatchedCounts(lottos, winningNumbers);

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
        <Button type="reset" onClick={onClick}>
          다시 시작하기
        </Button>
      </Flex>
    </>
  );
};

LottoRewardsContainer.prototype = {
  onClick: PropTypes.func,
  lottos: PropTypes.array.isRequired,
  winningNumbers: PropTypes.object.isRequired,
};
