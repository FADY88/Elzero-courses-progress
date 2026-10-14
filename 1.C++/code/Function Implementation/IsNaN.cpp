#include <iostream>
using namespace std;

bool IsNaN(string s)
{
  for (char c : s)
  {
    if (c < '0' || c > '9')
    {
      return true;
    }
  }
  return false;
}

int main()
{
  cout << IsNaN("1234gd") << endl;
  cout << IsNaN("1234") << endl;
}