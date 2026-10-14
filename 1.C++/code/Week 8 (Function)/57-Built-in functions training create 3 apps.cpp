/*
  Function
    Built-in function
      Algorithm header
        min
        max
        count

    Create 3 apps
      find minimum number
      find maximum number
      count number occurrence
*/
#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
  cout << min(10, -20) << "\n";                       // -20
  cout << min(10, 20) << "\n";                        // 10
  cout << min('a', 'c') << "\n";                      // a
  cout << min('a', 'C') << "\n";                      // C
  cout << min({10, -20, 30, -100, 100, -50}) << "\n"; // -100
  cout << "=====================\n";
  cout << max(10, -20) << "\n";                       // 10
  cout << max(10, 20) << "\n";                        // 20
  cout << max('a', 'c') << "\n";                      // c
  cout << max('a', 'C') << "\n";                      // a
  cout << max({10, -20, 30, -100, 100, -50}) << "\n"; // 100
  cout << "=====================\n";
  int nums[] = {10, -20, 30, -100, 100, -50};
  int n = size(nums);
  int mix;
  mix = nums[0];
  for (int i = 0; i < n; i++)
  {
    if (mix > nums[i]) // (max < nums[i]) for maximum
    {
      mix = nums[i];
    }
  }
  cout << mix << "\n";
  cout << "=====================\n";
  int nums2[] = {10, 20, 10, 10, 13, 15, 100, 20, 10};
  int n2 = size(nums2);
  int counter = 0;
  int choosenNum = 10;
  for (int i = 0; i < n2; i++)
  {
    if (nums2[i] == choosenNum)
    {
      counter++;
    }
  }
  cout << choosenNum << " found " << counter << " times\n";
  return 0;
}