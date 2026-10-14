#include <iostream>
using namespace std;

string stringRepeat(string s, int r = 2, bool ls = false, string sep = ",")
{
  string str;
  for (int i = 0; i < r; i++)
  {
    str += s;
    if (i + 1 != r || ls)
      str += sep;
  }
  return str;
}

int main()
{
  cout << stringRepeat("hello", 3, false, "##_##");
  return 0;
}