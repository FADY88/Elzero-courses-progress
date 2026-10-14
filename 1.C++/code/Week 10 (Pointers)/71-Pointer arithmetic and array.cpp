/*
  Pointers
    Pointer Arithmetic
    Pointer and Array
*/
#include <iostream>
using namespace std;
int main()
{
  int nums[]{10, 20, 30, 40, 50};
  cout << nums << "\n";     // First elements address
  cout << &nums[0] << "\n"; // First elements address

  cout << nums[0] << "\n";     // First elements
  cout << *nums << "\n";       // First elements
  cout << nums[0 + 1] << "\n"; // Second elements
  cout << *(nums + 1) << "\n"; // Second elements
  // with pointer
  int *ptr = nums;

  cout << ptr << "\n";  // First elements
  cout << *ptr << "\n"; // First elements

  ptr++;                // Go to the next block in the array
  cout << ptr << "\n";  // Second elements
  cout << *ptr << "\n"; // Second elements

  ptr += 3;             // Go to specific block in the array
  cout << ptr << "\n";  // Second elements
  cout << *ptr << "\n"; // Second elements


  return 0;
}