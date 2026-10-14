/*
  Pointers
    Pointing to an array
*/
#include <iostream>
using namespace std;
int main()
{
  int nums[] = {10, 20, 30, 40};
  int *ptr = &nums[0];
  cout << "First element\n\n";
  cout << "Value with index: " << nums[0] << "\n";
  cout << "Value with pointer: " << *ptr << "\n";
  cout << "Address with index: " << &nums[0] << "\n";
  cout << "Address with pointer: " << ptr << "\n";

  cout << "Second element\n\n";
  cout << "Value with index: " << nums[1] << "\n";
  cout << "Value with pointer: " << *(ptr + 1) << "\n"; // 1 * data type size
  cout << "Address with index: " << &nums[1] << "\n";
  cout << "Address with pointer: " << ptr + 1 << "\n";

  cout << "Third element\n\n";
  cout << "Value with index: " << nums[2] << "\n";
  cout << "Value with pointer: " << *(ptr + 2) << "\n"; // 2 * data type size
  cout << "Address with index: " << &nums[2] << "\n";
  cout << "Address with pointer: " << ptr + 2 << "\n";
  return 0;
}