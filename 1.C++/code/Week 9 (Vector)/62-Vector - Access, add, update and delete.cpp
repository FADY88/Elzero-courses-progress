/*
  Access
    at()
    DO NOT USE Square brackets []
  Add
    push_back ==> add elements to the end
  Update
    at()
  Delete
    pop_back() ==> remove element from the end
*/

#include <iostream>
#include <vector>
using namespace std;
int main()
{
  vector<int> nums = {10, 20, 30};
  cout << nums.at(2) << "\n";
  cout << nums[2] << "\n"; // Not recommended (may give you garbage value)
  nums.push_back(40);
  cout << nums.size() << "\n"; // 4
  cout << nums.at(3) << "\n";  // 40
  nums.at(3) = 100;
  cout << nums.at(3) << "\n";  // 100
  nums.push_back(500);
  cout << nums.size() << "\n"; // 5
  cout << nums.at(4) << "\n";  // 500
  nums.pop_back();
  cout << nums.size() << "\n"; // 4
  return 0;
}