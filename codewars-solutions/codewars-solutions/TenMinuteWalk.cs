using System;
using System.Collections.Generic;
using System.Linq;

namespace codewars_solutions
{
    internal class TenMinuteWalk
    {
        internal static bool IsValidWalk(string[] walk)
        {
            Dictionary<string, int> directions = new Dictionary<string, int>
                { {"n", 0},{"s", 0},{"w", 0},{"e", 0}
            };

            bool valid = false;
            if (walk != null && walk.Length == 10)
            {
                foreach(string block in walk)
                {
                    if (directions.ContainsKey(block))
                        directions[block]++;
                }

                if (directions.Values.Sum() == 10 
                    && directions["n"] == directions["s"]
                    && directions["w"] == directions["e"])
                    valid = true;
            }

            return valid;
        }
    }
}