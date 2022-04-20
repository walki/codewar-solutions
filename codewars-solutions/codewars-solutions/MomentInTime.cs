using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace codewars_solutions
{
    internal class MomentInTime
    {
        private char[] timeChars = "123456789".ToCharArray();

        internal bool[] MomentOfTimeInSpace(string time)
        {
         
            int timecount = 0;
            int spacecount = 0;

            (spacecount, timecount) = time.ToCharArray().Aggregate(
                (0, 0), (acc, curr) => 
                {
                    var _ = timeChars.Contains(curr) 
                                        ? acc.Item2 += Convert.ToInt32(curr.ToString())
                                        : acc.Item1++;
                    return acc;      
                });

            return new bool[]{  spacecount > timecount, 
                                spacecount == timecount, 
                                spacecount < timecount };
        }
    }
}