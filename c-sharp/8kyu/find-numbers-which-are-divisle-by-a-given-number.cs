using System.Linq;

public class Kata
{
  public static int[] DivisibleBy(int[] numbers, int divisor)
  {
    return numbers.Where( c =>  c % divisor == 0 ).ToArray();
  }
}