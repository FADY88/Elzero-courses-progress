/*
  Loop
    Break
    Continue
*/
#include <iostream>
using namespace std;
int main()
{
  int nums[] = {10, 20, 30, 40, 20, 50};

  for (int i = 0; i < (sizeof(nums) / sizeof(nums[0])); i++)
  {
    if (nums[i] == 20) // for skipping 20
    {
      continue;
    }
    cout << nums[i] << "\n";
    // cout << "After\n";
  }
  return 0;
}