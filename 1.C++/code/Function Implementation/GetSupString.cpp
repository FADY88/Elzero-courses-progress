#include <iostream>
using namespace std;

string SubString(string s, int start, int end, bool inc_end = false)
{
  start = start < 0 ? 0 : start;
  end = end >= s.length() ? s.length() - 1 : end;
  string result;
  for (int i = start; inc_end ? i <= end : i < end; i++)
  {
    result += s[i];
  }
  return result;
}

int main()
{
  cout << SubString("fady adel", 0, 9, false);
}