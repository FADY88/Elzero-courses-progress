#include <iostream>
using namespace std;

int parseInt(string st)
{
  int n = 0;
  for (char c : st)
  {
    if (isdigit(c))
    {
      n *= 10;
      n += c - '0'; 
    }
  }
  return n;
}

int main()
{
  cout << parseInt("1234fad7y5");
}