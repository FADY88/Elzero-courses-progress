/*
  Loop
    While loop

  Syntax
  while (condition is true)
  {
    // code
  }
*/
#include <iostream>
using namespace std;
int main()
{
  // for (int i = 0; 1 < 5; i++)
  // {
  //   cout << i << "\n";
  // }

  int i = 0;

  while (i < 5)
  {
    cout << i << "\n";
    if (i == 2)
    {
      break;
    }
    i++;
  }
  return 0;
}