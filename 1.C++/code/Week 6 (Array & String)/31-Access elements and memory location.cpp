/*
  Arrays
  - Access Array Elements
  - Check Element Location
*/

#include <iostream>
using namespace std;

int main()
{
  int nums[]{100, 200, 300};

  cout << "First element: " << nums[0] << "\n";
  cout << "Last element: " << nums[2] << "\n"; // Number of elements - 1

  cout << "Location: " << &nums[0] << "\n";
  cout << "Location: " << &nums[1] << "\n";
  cout << "Location: " << &nums[2] << "\n";
  
  return 0;
}