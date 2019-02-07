using System;
using System.Linq;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    
    var numberList = numbers.Split(' ').Select( x => Convert.ToInt32(x) );
    
    return $"{numberList.Max()} {numberList.Min()}";
  }
  
}