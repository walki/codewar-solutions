using System;
using System.Linq;
using System.Collections.Generic;

public class Rotations
{
  public static Boolean ContainAllRots(string strng, List<string> arr) 
  {
      if (strng == "") return true;
  
      
      List<string> allRots = FindAllRots(strng);
      
      return allRots.Aggregate(true, (foundAll, curr) => foundAll = foundAll ? arr.Contains(curr) : foundAll );

  }
  
  public static List<string> FindAllRots(string str)
  {
    List<string> rots = new List<string>();
    rots.Add(str);
    
    if (str.Length > 1)
    {
      for( int i = 1; i < str.Length; i++)
      {
        string u = str.Substring(0, i);
        string v = str.Substring(i);
        rots.Add(v + u);
      }
    }
    return rots;
  }
}