/*
  Iterator
    Loop with iterator
    Ranged loop with for
*/
#include <iostream>
#include <vector>
using namespace std;
int main()
{
  vector<int> nums ={10, 20, 30, 40};
  vector<int>::iterator it;
  // Loop with iterator (in the condition != can be used)
  for (it = nums.begin(); it < nums.end(); it++)
  {
    cout << *it << "\n"; 
  }
    cout << "===============\n";
  // Ranged loop with for
  for (int val : nums)
  {
    cout << val << "\n";
  }
  cout << "===============\n";
  int numbers[5] = {20, 40, 60, 80, 100};
  for (int i : numbers)
  {
    cout << i << "\n";
  }
  return 0;
}