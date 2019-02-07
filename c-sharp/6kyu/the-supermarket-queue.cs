using System;
using System.Linq;

using System.Collections.Generic;


public class Kata
{

    public static long QueueTime(int[] customers, int n)
    {
        List<int> queue = customers.ToList();
        List<int> tills = Enumerable.Repeat(0, n).ToList();
        
        // Fill Empty Tills
        FillEmptyTills(tills, queue);
    
        int countTime = 0;
        while (queue.Count > 0)
        {
          countTime++;
          CountOffOne(tills);
          FillEmptyTills(tills, queue);
        }
        countTime += tills.Max();
        return countTime;
    }
    
    
    
    public static void CountOffOne(List<int> tills)
    { 
        for(int i = 0; i < tills.Count; i++)
        {
          if (tills[i] > 0)
          { 
            tills[i]--;
          }
        }
    }
    
    public static void FillEmptyTills(List<int> tills, List<int> queue)
    {
      for(int i = 0; i < tills.Count; i++)
      {
        if(tills[i] == 0)
        {
          if (queue.Count > 0)
          {
            tills[i] = queue[0];
            queue.RemoveAt(0);
          }
        }
      }
    }

    
}