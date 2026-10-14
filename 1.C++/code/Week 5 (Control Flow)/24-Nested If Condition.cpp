/*
  Control Flow
    Nested If Condition
*/

#include <iostream>
using namespace std;

int main()
{
  int age = 25;
  int points = 1500;

  if (age >= 18)
  {
    cout << "Your age is okay\n";
    if (points > 1000)
    {
      cout << "You are VIP\n";
    }
  }

  return 0;
}