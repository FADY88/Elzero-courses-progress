#include <iostream>
using namespace std;
int main()
{
  string names[] = {"Osama", "Ahmed", "Mahmoud", "Hagar", "Eman", "Salwa"};
  int arrSize = sizeof(names) / sizeof(names[0]);
  for (int i = 0; i < arrSize; i++)
  {
    for (int letterCount = 0; letterCount < 6; letterCount++)
    {
      if (names[i][letterCount] == char(0) && letterCount == 5)
      {
        cout << names[i] << "\n";
        break;
      }
    }
  }
  // Output Needed
  // "Osama"
  // "Ahmed"
  // "Hagar"
  // "Salwa"
  return 0;
}