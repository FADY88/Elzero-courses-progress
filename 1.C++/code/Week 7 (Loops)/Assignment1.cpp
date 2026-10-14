#include <iostream>
using namespace std;
int main()
{
  // take two numbers
  int n1, n2;
  cout << "Number one: ";
  cin >> n1;
  cout << "Number two: ";
  cin >> n2;
  // switch numbers if needed
  if (n2 < n1)
  {
    int swap;
    swap = n2;
    n2 = n1;
    n1 = swap;
  }
  // make the loop
  cout << "Output: ";
  int i;
  for (i = n1 + 1; i != n2; i++)
  {
    if (i % 2 == 0) // adjust the loop not to print even numbers
    {
      continue;
    }
    cout << i;
    if (i + 2 != n2 && i + 2 < n2) // Commas except last number
      {
        cout << ", ";
      }
  }
  return 0;
}