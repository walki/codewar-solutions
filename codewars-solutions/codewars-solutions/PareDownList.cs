using System;
using System.Collections.Generic;
using System.Linq;

namespace codewars_solutions
{
    internal class PareDownList
    {

        internal static int[] DeleteNth(int[] arr, int max)
        {
            Dictionary<int, int> seen = new Dictionary<int, int>();

            return arr.Aggregate(new List<int>(), (acc, cur) =>
               {
                   if (!seen.ContainsKey(cur))
                       seen.Add(cur, 0);

                   if (seen[cur] < max)
                   {
                       acc.Add(cur);
                       seen[cur]++;
                   }
                   
                   return acc;
               }).ToArray();

        }

    }
}