/*
  Vector
    Iterator
      Traversing
        begin()
        end()
        advance()
*/
#include <iostream>
#include <vector>
using namespace std;
int main()
{
  vector<int> nums = {10, 20, 30, 40};
  vector<int>::iterator first = nums.begin();
  vector<int>::iterator last = nums.end() - 1;

  cout << "first element is: " << *first << "\n";    // 10
  cout << "Second element is: " << first[1] << "\n"; // 20
  cout << "Third element is: " << first[2] << "\n";  // 30

  cout << "Last element is: " << *last << "\n";       // 40
  cout << "Last element is: " << *(last - 1) << "\n"; // 40

  advance(first, 3);
  cout << "first element is: " << *first << "\n";    // 40

  advance(first, -2);
  cout << "first element is: " << *first << "\n";    // 20
  return 0;
}