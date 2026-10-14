#include <iostream>
using namespace std;

string CleanString(string s, bool keepnums = true)
{
  string result;
  for (char c : s)
  {
    // c <= '9' && c >= '0' -> isdigit()
    if ((keepnums && isdigit(c)) || islower(c) || isupper(c) || c == '_')
    {
      result += c;
    }
  }
  return result;
}

int main()
{
  cout << CleanString(")&^&%&^$^%$^FADY4536_)&^&^%$", false) << endl;
  cout << CleanString(")&^&%&^$^%$^FADY4536_)&^&^%$", true);
}