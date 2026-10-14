/*
  Control Flow
  If    else if     else

  Syntax
  if (Condition is ture)
  {
    // Do Something
  }
*/

#include <iostream>
using namespace std;

int main()
{
  int age = 15;
  int points = 450;
  int rank = 4;

  if (age >= 18)
  {
    cout << "Welcome your age is okay\n";
  }
  else if (points > 500)
  {
    cout << "Welcome your points are okay\n";
  }
  else if (rank > 500)
  {
    cout << "Welcome your rank is okay\n";
  }
  else
  {
    cout << "I'm sorry\n";
  }
  return 0;
}