/*

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

 */
using System;

public static class Kata 
{
  public static int TrailingZeros(int n)
  {
    int divBy5 = 0;
    for (int i = 1; i <= n; i++)
    {
      int temp = i;
      while (temp % 5 == 0)
      {
        divBy5++;
        temp /= 5;
      }
    }
    return divBy5;
  }
}