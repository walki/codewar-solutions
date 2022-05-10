using NUnit.Framework;

namespace codewars_solutions
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Ignore(reason: "Completed")]
        [Test]
        [TestCase(0, 0)]
        [TestCase(1, 1)]
        [TestCase(2, 0 + 1)]
        [TestCase(3, 1 + 1)]
        [TestCase(4, 1 + 2)]
        [TestCase(5, 2 + 3)]
        [TestCase(10, 55)]
        public void FibonacciTest(int n, int expected)
        {
            int fib = Fibonacci.Fib(n);
            Assert.AreEqual(fib, expected);
        }

        [Ignore(reason: "Completed")]
        [Test]
        [TestCase("12:30 am", new bool[] { false, false, true })]
        [TestCase("12:02 pm", new bool[] { false, true, false })]
        [TestCase("01:00 pm", new bool[] { true, false, false })]
        [TestCase("11:12 am", new bool[] { false, false, true })]
        [TestCase("05:20 pm", new bool[] { false, false, true })]
        [TestCase("04:20 am", new bool[] { false, true, false })]
        public void BasicTests(string time, bool[] expected)
        {
            var kata = new MomentInTime();
            var actual = kata.MomentOfTimeInSpace(time);
            Assert.AreEqual(expected, actual);
        }


        //Convert number to reversed array of digits
        //Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
        [Ignore(reason: "Completed")]
        [Test]
        [TestCase(0, new int[] { 0 })]
        [TestCase(1, new int[] { 1 })]
        [TestCase(11, new int[] { 1, 1 })]
        [TestCase(10, new int[] { 0, 1 })]
        [TestCase(100, new int[] { 0, 0, 1 })]
        [TestCase(342597, new int[] { 7, 9, 5, 2, 4, 3 })]
        public void NumberToReverseArrayOfDigits(int numToDigitize, int[] expected)
        {
            var digitizer = new Digitizer();
            var actual = digitizer.Digitize(numToDigitize);
            Assert.AreEqual(expected, actual);
        }

        [Ignore(reason: "Completed")]
        [Test]
        [TestCase("", "")]
        [TestCase("a", "a")]
        [TestCase("1a", "a")]
        [TestCase("1a", "a")]
        [TestCase("1a1", "a")]
        [TestCase("b2", "b")]
        [TestCase("This looks5 grea8t!", "This looks great!")]
        public void StringCleaningTest(string stringToClean, string dirty)
        {
            string clean = StringCleaner.StringClean(stringToClean);
            Assert.That(clean, Is.EqualTo(dirty));
        }


        // Decimal to Factorial and Back
        [Ignore(reason: "Completed")]
        [Test]
        [TestCase("", 0)]
        [TestCase("0", 0)]
        [TestCase("10", 1)]
        [TestCase("210", 5)]
        [TestCase("110", 3)]
        [TestCase("3110", 21)]
        [TestCase("341010", 463)]
        public void FactorialBaseToDecimalTest(string fact, long expected)
        {
            long actual = Dec2Fact.factString2Dec(fact);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Ignore(reason: "Completed")]
        [Test]
        [TestCase(0, "0")]
        [TestCase(1, "10")]
        [TestCase(2, "100")]
        [TestCase(3, "110")]
        [TestCase(4, "200")]
        [TestCase(5, "210")]
        [TestCase(6, "1000")]
        [TestCase(13, "2010")]
        [TestCase(463, "341010")]
        public void DecimalToFactorialBaseTest(long dec, string expected)
        {
            string actual = Dec2Fact.dec2FactString(dec);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Ignore(reason: "Completed 6kyu")]
        [Test]
        [TestCase(null, false)]
        [TestCase(new string[] {}, false)]
        [TestCase(new string[] {"n"}, false)]
        [TestCase(new string[] {"n","n","n","n","n","s","s","s","s","s"}, true)]
        [TestCase(new string[] {"n","n","n","n","n","s","s","s","s","s","n","s"}, false)]
        public void TenMinuteWalk_MustBe10Min_Test(string [] walk, bool expected)
        {
            bool actual = TenMinuteWalk.IsValidWalk(walk);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Ignore(reason: "Completed 6kyu")]
        [Test]
        [TestCase(new string[] { "n", "n", "n", "n", "n", "s", "s", "s", "s", "e" }, false)]
        [TestCase(new string[] { "n", "n", "n", "n", "n", "s", "s", "s", "s", "s" }, true)]
        [TestCase(new string[] { "n", "s", "n", "s", "n", "s", "n", "s", "n", "s" }, true)]
        [TestCase(new string[] { "n", "s", "w", "e", "n", "s", "w", "e", "n", "s" }, true)]
        [TestCase(new string[] { "w", "e", "w", "e", "n", "s", "w", "e", "n", "s" }, true)]
        public void TenMinuteWalk_MustReturnToStart_Test(string[] walk, bool expected)
        {
            bool actual = TenMinuteWalk.IsValidWalk(walk);
            Assert.That(actual, Is.EqualTo(expected));
        }


    }
}