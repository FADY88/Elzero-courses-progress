/*
  Function
    Math functions
      pow
      fmod
      ceil
      floor
      round
      trunc
*/
#include <iostream>
#include <cmath>
using namespace std;
int main()
{
  cout << pow(2, 4) << "\n";     // 16
  cout << 11 % 2 << "\n";        // 1
  // cout << 11.5 % 2 << "\n";   // Error
  cout << fmod(11.5, 2) << "\n"; // 1.5

  cout << ceil(9.1) << "\n";     // 10

  cout << floor(9.9) << "\n";    // 9

  cout << round(9.5) << "\n";    // 10
  cout << round(9.4) << "\n";    // 9
  cout << round(9.49) << "\n";   // 9

  cout << trunc(9.49) << "\n";   // 9
  cout << trunc(9.5) << "\n";    // 9
  cout << trunc(9.1) << "\n";    // 9
  return 0;
}