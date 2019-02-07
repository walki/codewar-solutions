using System;
using System.Collections;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
  public static int CountBits(int n)
    =>  new BitArray(new int[]{n})
          .Cast<bool>()
          .Where(x => x == true)
          .Count();
}