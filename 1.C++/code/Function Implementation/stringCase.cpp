#include <iostream>
using namespace std;

string to_upper(string st)
{
  string str;
  for (char c : st)
  {
    if (c >= 'a' && c <= 'z')
      c -= 32;
    str += c;
  }
  return str;
}


string to_lower(string st)
{
  string str;
  for (char c : st)
  {
    if (c >= 'A' && c <= 'Z')
      c += 32;
    str += c;
  }
  return str;
}


string SwapCase(string st)
{
  string str;
  for (char c : st)
  {
    if (c >= 'a' && c <= 'z')
      c -= 32;
    else if (c >= 'A' && c <= 'Z')
      c += 32;
    str += c;
  }
  return str;
}

int main()
{
  cout << to_upper("faDy") << endl;
  cout << to_lower("FAdY") << endl;
  cout << "-------------\n";
  cout << SwapCase("faDY") << endl;
  cout << SwapCase("faDY10#$%^") << endl;
}