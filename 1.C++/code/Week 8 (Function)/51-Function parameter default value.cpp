/*
  Function
    Parameter default value
*/
#include <iostream>
using namespace std;
// Default value must be in the last parameter
void details(string msg = "Welcome", string name = "Unknown")
{
  cout << msg << " " << name << "\n";
}

int main()
{
  details("Hello", "Fady");
  details("Hello");
  details();
  return 0;
} 