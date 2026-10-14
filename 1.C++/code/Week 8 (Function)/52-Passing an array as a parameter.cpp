/*
  Function
    Passing an array as a parameter
*/
#include <iostream>
using namespace std;

void calc(int nums[], int count)
{
  int result;
  for (int i = 0; i < count; i++)
  {
    result += nums[i];
  }
  cout << "Result: " << result << "\n";
}

int main()
{
  int numbers[] = {10, 20, 30, 40, 100};
  int numbersSize = sizeof(numbers) / sizeof(numbers[0]);
  calc(numbers, numbersSize);
  return 0;
}