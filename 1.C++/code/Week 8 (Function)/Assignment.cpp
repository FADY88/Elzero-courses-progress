#include <iostream>
using namespace std;
// Write Your Function Here
int firstnegative(int arr[], int size)
{
  int ans = 1;
  for (int i = 0; i < size; i++)
  {
    if (arr[i] < 0)
    {
      ans = arr[i];
      break;
    }
  }
  if (ans > 0)
  {
    cout << "No negative numbers were found.\n";
    return 0;
  }
  for (int i = 0; i < size; i++)
  {
    if (arr[i] < 0 && arr[i] > ans)
    {
      ans = arr[i];
    }
  }
  return ans;
} // Write Your Function Here
int main()
{
  int numbers[] = {-10, -20, 15, 100, 10, 5, -50, 0, -5, -10}; // -5
  // int numbers[] = {10, 20, 15, 100, 10, 5, 50, 0, 5, 10};      // Error
  int numssize = size(numbers);
  cout << firstnegative(numbers, numssize) << "\n";
  return 0;
}