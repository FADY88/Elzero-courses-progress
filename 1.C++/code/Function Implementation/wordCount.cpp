#include <iostream>
#include <cassert>
using namespace std;

/*
  That is a very important file because I learned a lot in it
    1. The importance of boolean flags and the difference between it and storing data in memory
    (Check countWords() with and without flags to understand)

    2. It's hard to manipulate string that have '\0' in the middle (check test cases 10 and 11)

    3. I leaned a little bit about testing using <cassert> library
*/

// countWords without flags

// int countWords(string st, char sep = ' ')
// {
//   int wordCount = 0;
//   string tmp = "";
//   int length = st.length();
//   for (int i = 0; i < length; i++)
//   {
//     if (st[i] == sep)
//     {
//       wordCount += tmp.length() > 0 ? 1 : 0;
//       tmp = "";
//     }
//     else
//     {
//       tmp += st[i];
//     }
//   }
//   wordCount += tmp.length() > 0 ? 1 : 0;
//   return wordCount;
// }

// countWords with flags
int countWords(string st, char sep = ' ')
{
  // TODO: implement the function
  // "one,two,three", ','
  int wordCount = 0;
  bool inWord = false;
  int length = st.length();
  for (int i = 0; i < length; i++)
  {
    if (st[i] == sep)
    {
      wordCount += inWord ? 1 : 0;
      inWord = false;
    }
    else
    {
      inWord = true;
    }
  }
  wordCount += inWord ? 1 : 0;
  return wordCount;
}

// Test cases
int main() {
    // Test case 1: Default separator (space)
    assert(countWords("Hello World") == 2);

    // Test case 2: Custom separator
    assert(countWords("one,two,three", ',') == 3);

    // Test case 3: No words
    assert(countWords("") == 0);

    // Test case 4: Single word
    assert(countWords("singleword") == 1);

    // Test case 5: Leading and trailing separators
    assert(countWords("  spaced  ") == 1);

    // Test case 6: Multiple consecutive separators
    assert(countWords("multiple,,,separators", ',') == 2);

    // Test case 7: Separator not in string
    assert(countWords("no-dash-here", '-') == 3);

    // Test case 8: Long string
    assert(countWords("this is a very very long string with many many words") == 11);

    // Test case 9: String with only separators
    assert(countWords(",,,,", ',') == 0);

    // Test case 10: Non-printable characters as separators
    assert(countWords("word\nword", '\n') == 2);

    // Test case 11: Non-printable characters as separators
    // assert(countWords("word\0word", '\0') == 2); // Error

    return 0;
}