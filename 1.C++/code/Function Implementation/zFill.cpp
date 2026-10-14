#include <iostream>
using namespace std;

string zFill(string s, int width, string fill = "0")
{
  width = width - s.length();
  for (int i = 0; i < width; i++)
  {
    if (width > 1)
      s = fill + s;
  }
  return s;
}


int main()
{
  cout << zFill("123", 6) << endl;
  cout << zFill("123", 6, "#") << endl;
  cout << zFill("123", 1, "#") << endl;
  return 0;
}