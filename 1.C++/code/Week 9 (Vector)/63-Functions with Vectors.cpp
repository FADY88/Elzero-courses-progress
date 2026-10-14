/*
  size()     < Current number of elements
  max_size() < Maximum number if elements
  capacity() < Storage capacity
  front()    < First element
  back()     < Last element
  clear()    < Clear all elements from Vector
  empty()    < Check if its empty or not
*/
#include <iostream>
#include <vector>
using namespace std;
int main()
{
  vector<int> nums = {10, 20, 30, 40};
  cout << nums.size() << "\n";
  cout << nums.max_size() << "\n";
  cout << nums.capacity() << "\n";
  cout << nums.front() << "\n"; // 10
  cout << nums.at(0) << "\n"; // 10
  cout << nums.back() << "\n";  // 40
  cout << nums.at(nums.size() - 1) << "\n";  // 40
  nums.clear();
  cout << nums.size() << "\n";
  if (nums.empty())
  {
    cout << "Vector is empty\n";
  }
  else 
  {
    cout << "Vector is not empty\n";
  }
  return 0;
}