import {
  LOTTO,
  MATCH_COUNT,
  PROFIT,
  RANK,
  RESULT_TABLE,
} from '../constants/lotto';

export const getMatchedCounts = (lottos, winningNumbers) => {
  return lottos.map(lotto => {
    const isMatchedBonus = lotto.includes(winningNumbers.bonusNumber);
    let count = lotto.filter(number => winningNumbers.numbers.includes(number))
      .length;

    if (count === MATCH_COUNT.FIVE && isMatchedBonus) {
      count += MATCH_COUNT.BONUS;
    }

    return count;
  });
};

export const getRanks = counts => {
  return counts.map(getRank);
};

export const getTotalProfit = counts => {
  const totalProfit = counts
    .filter(count => count !== 0)
    .reduce((sum, count) => (sum += getProfit(getRank(count))), 0);

  const cost = counts.length * LOTTO.UNIT;
  return ((totalProfit - cost) / cost) * 100;
};

const getRank = count => {
  return (
    {
      [MATCH_COUNT.SIX]: RANK.FIRST,
      [MATCH_COUNT.FIVE_BONUS]: RANK.SECOND,
      [MATCH_COUNT.FIVE]: RANK.THIRD,
      [MATCH_COUNT.FOUR]: RANK.FOURTH,
      [MATCH_COUNT.THREE]: RANK.FIFTH,
    }[count] || RANK.OTHER
  );
};

const getProfit = rank => {
  return (
    {
      [RANK.FIRST]: PROFIT.FIRST,
      [RANK.SECOND]: PROFIT.SECOND,
      [RANK.THIRD]: PROFIT.THIRD,
      [RANK.FOURTH]: PROFIT.FOURTH,
      [RANK.FIFTH]: PROFIT.FIFTH,
    }[rank] || PROFIT.OTHER
  );
};

export const getLottoProfitResult = ranks => {
  const table = {
    [RANK.FIRST]: {
      matchingCount: RESULT_TABLE.FIRST.MATCH_COUNT,
      reward: RESULT_TABLE.FIRST.PROFIT,
      wins: 0,
    },
    [RANK.SECOND]: {
      matchingCount: RESULT_TABLE.SECOND.MATCH_COUNT,
      reward: RESULT_TABLE.SECOND.PROFIT,
      wins: 0,
    },
    [RANK.THIRD]: {
      matchingCount: RESULT_TABLE.THIRD.MATCH_COUNT,
      reward: RESULT_TABLE.THIRD.PROFIT,
      wins: 0,
    },
    [RANK.FOURTH]: {
      matchingCount: RESULT_TABLE.FOURTH.MATCH_COUNT,
      reward: RESULT_TABLE.SECOND.PROFIT,
      wins: 0,
    },
    [RANK.FIFTH]: {
      matchingCount: RESULT_TABLE.FIFTH.MATCH_COUNT,
      reward: RESULT_TABLE.FIFTH.PROFIT,
      wins: 0,
    },
  };

  ranks.forEach(rank => {
    table[rank] && table[rank].wins++;
  });

  return table;
};
