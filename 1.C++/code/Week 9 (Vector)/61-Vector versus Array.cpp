/*
  Vector versus Array
    Vector
      It needs a standard header file to work
      Can be resized after the insertion or deletion of elements
      not index-based, and elements are accessed by iterators.
      Vectors are slower than arrays
      Vectors are available in C++ only

    Array
      C-Array is a language construct
      Cannot be resized after it's been defined
      Elements accessed by indexes
      Arrays are faster than vectors
      Arrays are available in C and C++

      When to use
      Vectors => When we don't know the size of the list
      Arrays  => When it comes to performance and speed

      [1] After learning pointers, there will be more things to compare.
      [2] You can still create a dynamic array, but vector is better.
*/
#include <iostream>
#include <vector>
#include <array>
using namespace std;
void calc(vector<int> numsVector)
{
  int result = 0;
  for (int i = 0; i < numsVector.size(); i++)
  {
    result += numsVector[i];
  }
  cout << "Result is: " << result << "\n";
}
int main()
{
  int nums[4] = {10, 20, 30};
  cout << nums[2] << "\n";
  nums[3] = 100;
  cout << nums[3] << "\n";
  cout << "===========\n";
  array<int, 4> numsArray = {10, 20, 30};
  cout << numsArray[2] << "\n";
  numsArray[3] = 100;
  cout << numsArray[3] << "\n";
  cout << "===========\n";
  vector<int> arrayOfNumbers = {10, 20, 30, 40, 100, 300};
  calc(arrayOfNumbers);
  return 0;
}