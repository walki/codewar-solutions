/*
Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

Task:
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak
Examples:
Kata.Dative("ablak") == "ablaknak"
Kata.Dative("szék") == "széknek"
Kata.Dative("otthon") == "otthonnak"
Preconditions:
To keep it simple: All words end with a consonant :)
All strings are unicode strings.
There are no grammatical exceptions in the tests.
 */

 public static class Kata
{
    public static string Dative(string word)
    {
        for( int i = word.Length - 1; i >= 0; i--)
        {
          if (IsFrontVowel(word[i]))
          {
            return word + "nek";
          }
          else if (IsBackVowel(word[i]))
          {
            return word + "nak";
          }
        }
        
        // wtfshn
        return word;
    }
    
    public static bool IsFrontVowel(char ch)
    {
      return 'e' == ch ||  'é' == ch ||  'i' == ch || 'í' == ch || 'ö' == ch || 'ő' == ch || 'ü' == ch || 'ű' == ch;
    }
    
    public static bool IsBackVowel(char ch)
    {
      return 'a' == ch ||  'á' == ch || 'o' == ch || 'ó' == ch || 'u' == ch || 'ú' == ch;
    }
}