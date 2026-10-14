#include <iostream>
#include <vector>
using namespace std;

int SumOfNumbers(vector<int> arr, char oper = '+')
{
  int sum;
  if (oper == '+' or oper == '-')
  {
    sum = 0;
    for (int n : arr)
      sum += n;
    return (oper == '+') ? sum : -sum;
  }
  else if (oper == '*')
  {
    sum = 1;
    for (int n : arr)
      sum *= n;
    return sum;
  }
  cout << "Invalid operation\n";
  return 0;
}

int main()
{
  cout << SumOfNumbers({1, 2, 6});
  return 0;
}