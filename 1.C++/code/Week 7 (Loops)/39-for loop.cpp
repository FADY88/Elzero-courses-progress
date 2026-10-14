/*  Loop
    Loop with for
    Loop on Array
  Syntax
  fore (init; Condition; Update)
  {
    // Block of code
  } */
#include <iostream>
using namespace std;
int main()
{
  int num = 0;
  cout << num << "\n"; // 0
  num++;
  cout << num << "\n"; // 1
  num++;
  cout << num << "\n"; // 2
  num++;
  cout << num << "\n"; // 3
  num++;
  cout << num << "\n"; // 4
  for (int i = 0; i < 5; i++)
  {
    cout << i << "\n";
  }
  int nums[4] = {100, 200, 300, 400};
  cout << nums[0] << "\n";
  cout << nums[1] << "\n";
  cout << nums[2] << "\n";
  cout << nums[3] << "\n";
  for (int index = 0; index < 4; index++)
  {
    cout << nums[index] << "\n";
  }
  return 0;
}