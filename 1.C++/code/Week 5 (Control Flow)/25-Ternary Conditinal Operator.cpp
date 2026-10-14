/*
  Control Flow
    Ternary Operator

  Syntax
  (Condition is True ? True : False);
*/

#include <iostream>
using namespace std;

int main()
{
  int age = 25;

  if (age >= 18)
  {
    cout << "Your age is okay\n";
  }
  else
  {
    cout << "Your age is NOT ok\n";
  }

  //Ternary Operator
  cout << (age >= 18 ? "Your age is okay\n" : "Your age is NOT ok\n");

  string mag = (age >= 18 ? "Your age is okay\n" : "Your age is NOT ok\n");

  cout << mag;
  return 0;
}