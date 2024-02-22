# Mars Land Property Development

This project is a solution to the Mars Land property development problem. The problem involves developing properties on a strip of land on Mars, with the goal of maximizing profit.

## Problem Description

Mr. X owns a large strip of land in Mars Land. For the purposes of this problem, assume that he has infinite land capacity. On each parcel of land, he can choose to develop it as per his wishes. He can build either Theatres, Pubs, or Commercial Parks. A Commercial Park houses 6 Commercial Spaces and 8 Screen Theatres.

- A Theatre takes 5 units of time to build and covers 2x1 parcel of land.
- A Pub takes 4 units of time to develop and covers 1x1 parcel of land.
- A Commercial Park takes 10 units of time to build and covers 3x1 parcel of land.

Each period of time that a building is operational it earns him money.

Establishment Earning:
- Theatre: $1500
- Pub: $1000
- Commercial Park: $3000

Mr. X cannot have two properties being developed in parallel in one unit of time.

## Approach

The solution to this problem involves a recursive approach to consider all possible combinations of properties and their profits. The `calculateMaxProfit` function calculates the maximum profit for a given time unit, while the `getMaxProfitIndex` function determines which property to build next. The `displayProbability` function returns a string representation of the solution, and the `displayOutput` function displays the output in the required format.

## Usage

To use this solution, simply call the `displayOutput` function with the desired time unit as an argument. For example:

```javascript
displayOutput(7);

It will show output as

Time Unit : 7
Earnings : $3000
Solution: 
1.T: 0, P: 1, C: 0
