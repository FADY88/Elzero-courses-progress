/*
  Loop
    for Loop advanced syntax
*/

#include <iostream>
using namespace std;

int main()
{
  int nums[] = {100, 200, 300, 400, 500, 600};
  int numsCount = sizeof(nums) / sizeof(nums[0]); // 6

  int i = 0;
  for (;;)
  {
    cout << nums[i] << "\n"; 
    i++;
    if (i == numsCount)
    {
      break;
    }
  }
  
  return 0;
}