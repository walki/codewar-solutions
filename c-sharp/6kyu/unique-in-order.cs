using System.Collections.Generic;
using System;


public static class Kata
{
  public static IEnumerable<T> UniqueInOrder<T>(IEnumerable<T> iterable) 
  {
    
    bool first = true;
    T previous = default(T);
    foreach( var current in iterable)
    {
      if (first)
      {
        first = false;
        if(current.Equals(default(T)))
        {
          yield return current;
        }
      }
    
      if (!current.Equals(previous))
      {
        previous = current;        
        yield return current;
      }
    }


  }
}