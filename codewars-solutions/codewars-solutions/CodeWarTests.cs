using NUnit.Framework;

namespace codewars_solutions
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Ignore(reason:"Completed")]
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
        [TestCase("12:30 am", new bool[] {false, false, true})]
        [TestCase("12:02 pm", new bool[] {false, true, false})]
        [TestCase("01:00 pm", new bool[] {true, false, false})]
        [TestCase("11:12 am", new bool[] {false, false, true})]
        [TestCase("05:20 pm", new bool[] {false, false, true})]
        [TestCase("04:20 am", new bool[] {false, true, false})]
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


    }
}