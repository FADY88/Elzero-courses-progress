#include <iostream>
using namespace std;

string StringReverse(string s)
{
  char c;
  int len = s.length() - 1;
  for (int i = 0; i < len / 2; i++)
  {
    c = s[i];
    s[i] = s[len - i];
    s[len - i] = c;
  }
  return s;
}

int main()
{
  cout << StringReverse("fady");
  return 0;
}