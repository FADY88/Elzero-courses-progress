/*
  Vector
    Use iterator to:
      Sort
      Count
      Reverse
*/
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main()
{
  vector<int> nums = {10, 500, 60, -20, 20, 20, 100, 20};
  int val = 20;
  int countTimes = count(nums.begin(), nums.end(), val);
  cout << "Number " << val << " found " << countTimes << " times.\n";
  cout << "======================\n";
  for (int &n : nums) // & to access the element directly 
  {
    cout << n << "\n";
  }
  cout << "======================\n";
  sort(nums.begin(), nums.end());
  for (int &n : nums)
  {
    cout << n << "\n";
  }
  cout << "======================\n";
  reverse(nums.begin(), nums.end());
  for (int &n : nums)
  {
    cout << n << "\n";
  }
  return 0;
}