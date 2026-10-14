#include <cassert>
#include <iostream>
using namespace std;

string slice(string str, int start, int end, int step = 1)
{
  if (end < start or end > str.length() or step == 0)
  {
    return "";
  }
  string result;
  // very important step (from college 😀)
  bool reverse = (step < 1) ? (step *= -1, true) : false;
  for (int i = start; i < end; i += step)
  {
    if (reverse)
    {
      result = str[i] + result;
    }
    else
    {
      result = result + str[i];
    }
  }
  return result;
}


int main()
{
    // Test case 1: Normal slicing
  assert(slice("Hello, World!", 0, 5) == "Hello");

  // Test case 2: Slicing with step
  assert(slice("abcdef", 1, 6, 2) == "bdf");

  // Test case 4: Empty result due to end < start
  assert(slice("abcdef", 4, 2) == "");

  // Test case 5: Empty result due to invalid end
  assert(slice("abcdef", 1, 10) == "");

  // Test case 6: Empty result due to step being 0
  assert(slice("abcdef", 1, 5, 0) == "");

  // Test case 8: Slicing with negative end (should return empty string)
  assert(slice("abcdef", 2, -3) == "");

  // Test case 9: Slicing with step larger than the string length
  assert(slice("abcdef", 0, 6, 10) == "a");

  // Test case 10: Slicing the whole string
  assert(slice("abcdef", 0, 6) == "abcdef");


  // Don't support them
  // // Test case 3: Reverse slicing
  // assert(slice("abcdef", 4, 1, -1) == "edc");
  // // Test case 7: Slicing with negative start (should be treated as 0)
  // assert(slice("abcdef", -1, 4) == "abcd");
  return 0;
}