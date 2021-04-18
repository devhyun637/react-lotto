import React, { Component } from 'react';
import styled from 'styled-components';

import LottoPurchaseForm from './LottoPurchaseForm';
import PurchaseResult from './lottoPurchaseResult/PurchaseResult';
import WinningNumberForm from './lottoWinningNumber/WinningNumberForm';

import { getRandomNumber } from '../utils';

const MainTitle = styled.h1`
  text-align: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lottos: [],
      winningNumbers: {
        numbers: [],
        bonusNumber: 0,
      },
    };
  }

  setLottos = lottos => {
    this.setState({
      lottos,
    });
  };

  setWinningNumbers = (numbers, bonusNumber) => {
    this.setState({
      winningNumbers: { numbers, bonusNumber },
    });
  };

  createLottos = price => {
    const lottoCount = Math.floor(price / 1000);

    const newLottos = Array.from({ length: lottoCount }, () => {
      const lotto = new Set();
      while (lotto.size < 6) {
        lotto.add(getRandomNumber(1, 45));
      }

      return [...lotto].sort((a, b) => a - b);
    });

    this.setLottos(newLottos);
  };

  render() {
    const { lottos } = this.state;

    return (
      <main style={{ maxWidth: '450px', margin: '0 auto' }}>
        <MainTitle>🎱 행운의 로또</MainTitle>
        <MainWrapper>
          <div style={{ width: '100%' }}>
            <LottoPurchaseForm createLottos={this.createLottos} />
            {lottos.length > 0 && <PurchaseResult lottos={lottos} />}
            {lottos.length > 0 && (
              <WinningNumberForm setWinningNumbers={this.setWinningNumbers} />
            )}
          </div>
        </MainWrapper>
      </main>
    );
  }
}

export default App;
