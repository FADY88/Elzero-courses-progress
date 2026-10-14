/*
  Arrays
  - What Is Array ?
  --- Collection Of Elements Of The Same Type
  --- Placed in Contiguous Memory Locations
  --- Referenced By Index Started From 0
  - Why Do We Need Array ?
  - Creating Array Syntax
  - Check Array Size
  - Create Array Without Size
*/

#include <iostream>
using namespace std;

int main()
{
  int nums[4] = {100,200,300,400};
  cout << sizeof(int) << "\n"; // 4 Bytes
  cout << sizeof(nums) << "\n"; // 16 Bytes

  double dos[4] = {100,200,300,400};
  cout << sizeof(int) << "\n"; // 8 Bytes
  cout << sizeof(dos) << "\n"; // 32 Bytes

  int rands[]{100, 200, 300};
  return 0;
}