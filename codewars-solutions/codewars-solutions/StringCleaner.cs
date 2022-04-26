using System;
using System.Linq;

namespace codewars_solutions
{
    internal class StringCleaner
    {
        internal static string StringClean(string stringToClean)
        {
            return stringToClean.Aggregate("", (acc, cur) =>  "1234567890".Contains(cur) ? acc : acc + cur );
        }
    }
}