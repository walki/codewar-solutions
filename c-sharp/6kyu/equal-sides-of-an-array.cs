using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static int FindEvenIndex(int[] arr)
  {
    List<int> numbers = arr.ToList();
    
    return numbers.Select( (value, index) => SumOfLeft(numbers, index) == SumOfRight(numbers, index) )
                  .ToList()
                  .IndexOf(true);
    
  }
  
  public static int SumOfLeft(List<int> list, int idx)
  {
    if (idx <= 0 || idx > list.Count - 1)
      return 0;
    
    return list.GetRange(0, idx).Sum();
  }
  
  public static int SumOfRight(List<int> list, int idx)
  {
    if (idx < 0 || idx >= list.Count - 1)
      return 0;
    
    return list.GetRange(idx + 1, list.Count - 1 - idx).Sum();
  }
  
}