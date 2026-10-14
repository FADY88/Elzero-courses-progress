#include <iostream>
#include <vector>
using namespace std;


int Min(vector<int> arr)
{
  int min = arr[0];
  for (int i : arr)
  {
    if (i < min)
      min = i;
  }
  return min;
}


int Max(vector<int> arr)
{
  int min = arr[0];
  for (int i : arr)
  {
    if (i > min)
      min = i;
  }
  return min;
}


int main()
{
  cout << Min({3, 5, 1}) << "\n";
  cout << Max({3, 5, 1}) << "\n";
  return 0;
}