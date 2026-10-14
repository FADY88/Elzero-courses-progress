/*
  Function
    DRY => Don't repeat yourself
    User defined and built in
    Syntax
    returnDataType functionName(parameter1, parameter2, parameter3)
    {
      // Function body contain block of code
    }
    Example
    Why we use functions
    Declare a function and call it
*/
#include <iostream>
using namespace std;

void sayHello()
{
  cout << "Hi Fady\n";
}

int main()
{
  sayHello();
  cout << "Hi Vivian\n";
  cout << "Hi Emma\n";
  return 0;
}