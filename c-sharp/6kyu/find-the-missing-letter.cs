public class Kata
{
    public static char FindMissingLetter(char[] array)
    {
        for(int i = 0; i < array.Length - 1; i++)
        {
            if(array[i + 1] - array[i] > 1)
            {
                return (char)(array[i] + 1);
            }
        }
    
        return ' ';
    }
}