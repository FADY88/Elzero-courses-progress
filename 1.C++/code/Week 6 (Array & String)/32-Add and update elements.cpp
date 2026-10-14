/*
  Arrays
  - Declare Empty Array
  - Add Elements To Array
  - Update Array Elements
  - Get Length Of Array With Sizeof */
#include <iostream>
using namespace std;
int main()
{
  int nums[4];
  nums[3] = 400; // Last element
  nums[2] = 300; // Third element
  nums[0] = 100; // First element
  nums[1] = 200; // Second element

  cout << "Element 1: " << nums[0] << "\n";
  cout << "Element 2: " << nums[1] << "\n";
  cout << "Element 3: " << nums[2] << "\n";
  cout << "Element 4: " << nums[3] << "\n";

  nums[1] = 583; // Second element

  cout << "Element 2: " << nums[1] << "\n";

  int anums[] = {100, 200,300,400,500,600};
  cout << "Array elements count is : " << sizeof(anums) / 4 << "\n";
  // 4 because I know that data type is integer

  cout << "Array elements count is : " << sizeof(anums) / sizeof(anums[0]) << "\n";
  // sizeof(first element) is in case I don't know the data type
  return 0;
}