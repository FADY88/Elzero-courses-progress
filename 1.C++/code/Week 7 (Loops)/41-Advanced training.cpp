//  for Loop advanced trainings 
#include <iostream>
using namespace std;
int main()
{
  int nums[] = {100, 200, 300, 400, 500, 600};
  int numsSize = sizeof(nums) / sizeof(nums[0]);
  for (int i = 0; i < numsSize; i += 2) // 100, 300, 500
  {
    cout << nums[i] << "\n";
  }
  cout << "=========\n";
  for (int i = 0; i < numsSize; i++) // 100, 300, 500
  {
    if (i % 2 == 0)
    {
      cout << nums[i] << "\n";
    }// i++ I also can increment one more time here to add up to 2
  }
  cout << "=========\n";
  for (int i = (numsSize - 1); i > 1; i--) // 600, 500, 400, 300
  {
    cout << nums[i] << "\n";
  }
  int i = (numsSize - 1);
  cout << "=========\n";
  for (;;) // 600, 500, 400, 300
  {
    if (i == 1)
    {
      break;
    }
    cout << nums[i] << "\n";
    i--;
  }
  return 0;
}