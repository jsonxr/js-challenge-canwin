# Description

Given an array of integers, you win if the position you are checking is a zero.
Start with a given index, check that position. If it is zero, return true. Otherwise,
if that number is a 2, you can go two spaces to left or right and check those two
positions.  If either of those are zero, you win. If they are not, check the number at those positions. If you can get to a zero by following this, return true, otherwise false.

# Install

    yarn install
    yarn test
