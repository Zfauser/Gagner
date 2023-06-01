import { useState } from 'react';
import '../styles/BettingTable.css';

const BettingTable = () => {
  const [userBets, setUserBets] = useState({
    numbers: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
        24: 0,
        25: 0,
        26: 0,
        27: 0,
        28: 0,
        29: 0,
        30: 0,
        31: 0,
        32: 0,
        33: 0,
        34: 0,
        35: 0,
        36: 0
    },
    twelve: {
      horizontal: {
        first: 0, // 1-12
        second: 0, // 13-24
        third: 0 // 25-36
      },
      vertical: {
        first: 0, // 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34
        second: 0, // 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32
        third: 0, // 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33
      }
    },
    eighteen: {
      first: 0, // 1-18
      second: 0 // 19-36
    },
    colors: {
      red: 0,
      black: 0
    },
    evenOdd: {
      even: 0,
      odd: 0
    }
  });

  const handleBet = (event) => {
    const betType = event.target.name;
    const betValue = event.target.id;
    const betAmount = 1;
    setUserBets((prevState) => {
      if (betType === 'numbers') {
        return {
          ...prevState,
          numbers: {
            ...prevState.numbers,
            [betValue]: prevState.numbers[betValue] + betAmount
          }
        };
      } else if (betType === 'horizontal') {
        return {
          ...prevState,
          twelve: {
            ...prevState.twelve,
            horizontal: {
              ...prevState.twelve.horizontal,
              [betValue]: prevState.twelve.horizontal[betValue] + betAmount
            }
          }
        };
      } else if (betType === 'vertical') {
        return {
          ...prevState,
          twelve: {
            ...prevState.twelve,
            vertical: {
              ...prevState.twelve.vertical,
              [betValue]: prevState.twelve.vertical[betValue] + betAmount
            }
          }
        };
      } else if (betType === 'eighteen') {
        return {
          ...prevState,
          eighteen: {
            ...prevState.eighteen,
            [betValue]: prevState.eighteen[betValue] + betAmount
          }
        };
      } else if (betType === 'colors') {
        return {
          ...prevState,
          colors: {
            ...prevState.colors,
            [betValue]: prevState.colors[betValue] + betAmount
          }
        };
      } else if (betType === 'evenOdd') {
        return {
          ...prevState,
          evenOdd: {
            ...prevState.evenOdd,
            [betValue]: prevState.evenOdd[betValue] + betAmount
          }
        };
      }
      return prevState;
    });
    if (betType === 'numbers' || betType === 'eighteen' || betType === 'colors' || betType === 'evenOdd') {
      if (userBets[betType][betValue] === 0) {
        userBets[betType][betValue] = betAmount;
      }
      console.log(userBets[betType][betValue]);
    } else if (betType === 'horizontal') {
      if (userBets.twelve.horizontal[betValue] === 0) {
        userBets.twelve.horizontal[betValue] = betAmount;
      }
      console.log(userBets.twelve.horizontal[betValue]);
    } else if (betType === 'vertical') {
      if (userBets.twelve.vertical[betValue] === 0) {
        userBets.twelve.vertical[betValue]  = betAmount;
      }
      console.log(userBets.twelve.vertical[betValue]);
    }
    // save userBets to local storage
    localStorage.setItem('userBets', JSON.stringify(userBets));
  };

  return (
    <div>
    <table className="roulette-table">
      <tbody>
        <tr>
          <td></td>
          <td>
              <button name="numbers" id="3" onClick={handleBet}>
              3
              </button>
          </td>
          <td>
            <button name="numbers" id="6" onClick={handleBet}>
              6
            </button>
          </td>
          <td>
            <button name="numbers" id="9" onClick={handleBet}>
              9
            </button>
          </td>
          <td>
            <button name="numbers" id="12" onClick={handleBet}>
              12
            </button>
          </td>
          <td>
            <button name="numbers" id="15" onClick={handleBet}>
              15
            </button>
          </td>
          <td>
            <button name="numbers" id="18" onClick={handleBet}>
              18
            </button>
          </td>
          <td>
              <button name="numbers" id="21" onClick={handleBet}>
              21
              </button>
          </td>
          <td>
              <button name="numbers" id="24" onClick={handleBet}>
              24
              </button>
          </td>
          <td>
              <button name="numbers" id="27" onClick={handleBet}>
              27
              </button>
          </td>
          <td>
              <button name="numbers" id="30" onClick={handleBet}>
              30
              </button>
          </td>
          <td>
              <button name="numbers" id="33" onClick={handleBet}>
              33
              </button>
          </td>
          <td>
              <button name="numbers" id="36" onClick={handleBet}>
              36
              </button>
          </td>
          <td>
            <button name="vertical" id="first" onClick={handleBet}>
              2 to 1
            </button>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <button name="numbers" id="0" onClick={handleBet}>
              0
            </button>
          </td>
          <td>
            <button name="numbers" id="2" onClick={handleBet}>
              2
            </button>
          </td>
          <td>
            <button name="numbers" id="5" onClick={handleBet}>
              5
            </button>
          </td>
          <td>
            <button name="numbers" id="8" onClick={handleBet}>
              8
            </button>
          </td>
          <td>
            <button name="numbers" id="11" onClick={handleBet}>
              11
            </button>
          </td>
          <td>
            <button name="numbers" id="14" onClick={handleBet}>
              14
            </button>
          </td>
          <td>
            <button name="numbers" id="17" onClick={handleBet}>
              17
            </button>
          </td>
          <td>
              <button name="numbers" id="20" onClick={handleBet}>
              20
              </button>
          </td>
          <td>
              <button name="numbers" id="23" onClick={handleBet}>
              23
              </button>
          </td>
          <td>
              <button name="numbers" id="26" onClick={handleBet}>
              26
              </button>
          </td>
          <td>
              <button name="numbers" id="29" onClick={handleBet}>
              29
              </button>
          </td>
          <td>
              <button name="numbers" id="32" onClick={handleBet}>
              32
              </button>
          </td>
          <td>
              <button name="numbers" id="35" onClick={handleBet}>
              35
              </button>
          </td>
          <td>
              <button name="vertical" id="second" onClick={handleBet}>
              2 to 1
              </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button name="numbers" id="1" onClick={handleBet}>
              1
            </button>
          </td>
          <td>
            <button name="numbers" id="4" onClick={handleBet}>
              4
            </button>
          </td>
          <td>
            <button name="numbers" id="7" onClick={handleBet}>
              7
            </button>
          </td>
          <td>
            <button name="numbers" id="10" onClick={handleBet}>
              10
            </button>
          </td>
          <td>
            <button name="numbers" id="13" onClick={handleBet}>
              13
            </button>
          </td>
          <td>
            <button name="numbers" id="16" onClick={handleBet}>
              16
            </button>
          </td>
          <td>
              <button name="numbers" id="19" onClick={handleBet}>
              19
              </button>
          </td>
          <td>
              <button name="numbers" id="22" onClick={handleBet}>
              22
              </button>
          </td>
          <td>
              <button name="numbers" id="25" onClick={handleBet}>
              25
              </button>
          </td>
          <td>
              <button name="numbers" id="28" onClick={handleBet}>
              28
              </button>
          </td>
          <td>
              <button name="numbers" id="31" onClick={handleBet}>
              31
              </button>
          </td>
          <td>
              <button name="numbers" id="34" onClick={handleBet}>
              34
              </button>
          </td>
          <td>
              <button name="vertical" id="third" onClick={handleBet}>
              2 to 1
              </button>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="4">
              <button name="horizontal" id="first" onClick={handleBet} style={{ width: "100%" }}>
              1st 12
              </button>
          </td>
          <td colspan="4">
              <button name="horizontal" id="second" onClick={handleBet} style={{ width: "100%" }}>
              2nd 12
              </button>
          </td>
          <td colspan="4">
              <button name="horizontal" id="third" onClick={handleBet} style={{ width: "100%" }}>
              3rd 12
              </button>
          </td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td colspan="2">
              <button name="eighteen" id="first" onClick={handleBet} style={{ width: "100%" }}>
              1 to 18
              </button>
          </td>
          <td colspan="2">
              <button name="evenOdd" id="even" onClick={handleBet} style={{ width: "100%" }}>
              Even
              </button>
          </td>
          <td colspan="2">
              <button name="colors" id="red" onClick={handleBet} style={{ width: "100%" }}>
              Red
              </button>
          </td>
          <td colspan="2">
              <button name="colors" id="black" onClick={handleBet} style={{ width: "100%" }}>
              Black
              </button>
          </td>
          <td colspan="2">
              <button name="evenOdd" id="odd" onClick={handleBet} style={{ width: "100%" }}>
              Odd
              </button>
          </td>
          <td colspan="2">
              <button name="eighteen" id="second" onClick={handleBet} style={{ width: "100%" }}>
              19 to 36
              </button>
          </td>
          <td></td>
          </tr>
      </tbody>
    </table>
  </div>
  );
};

export default BettingTable;