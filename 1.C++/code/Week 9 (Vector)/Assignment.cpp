#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> numbers = {10, 20, 30, 40, 50, 60, 70, 80};
  vector<int>::iterator it = numbers.begin();

  int location = -1 * (-1 -1 -1 -1); // 4
  // Write Method One
  advance(it, location);
  // Write Method Two
  numbers.erase(it, it + location);
  // Write Method Three
  reverse(it, numbers.end());
  reverse(it, it + location);

  cout << *it << "\n"; // 50
  return 0;
}