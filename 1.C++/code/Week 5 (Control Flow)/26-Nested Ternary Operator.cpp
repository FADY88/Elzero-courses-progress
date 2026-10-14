/*  Control Flow
      Nested Ternary Operator
      Alternative syntax for if conditions
        if the block of code just contains one line, No need for {}
    Syntax
      (Condition is True ? True : False);  */
#include <iostream>
using namespace std;
int main()
{
  int age = 17;
  int points = 400;
  if (age >= 18)
  {
    cout << "Your age is okay\n";
  }
  else
  {
    if (points >= 500)
    {
    cout << "Ok for points \n";
    }
    else
    {
    cout << "No age or points \n";
    }
  }
  //Nested Ternary Operator
  cout << (age >= 18 ? "Your age is okay\n" : (points >= 500 ? "Ok points\n" : "No age or points\n"));
// cout << (points >= 500 ? "Ok for points \n" : "No age nor points \n")
  return 0;
}