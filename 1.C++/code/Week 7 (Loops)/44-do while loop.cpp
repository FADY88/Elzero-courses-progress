/*
  Loop
    Do...while loop

  Syntax
  do
  {

  } while (condition is true)
*/
#include <iostream>
using namespace std;

int main()
{
  int index = 6;
  // while (index < 6)
  // {
  //   cout << index << "\n";
  //   index++;
  // }
  do
  {
    cout << index << "\n";
    index++;
  } while (index < 6);

  int x = -4;
  while (x < 0)
  {
    cout << "Positive number: "; cin >> x;
  }
  return 0;
}