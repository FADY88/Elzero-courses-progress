/*
  Loop
    Nested for loop
*/
#include <iostream>
using namespace std;

int main()
{
  string product[] = {"Item 1", "Item 2", "Item 3"};
  string sizes[] = {"Small", "Large", "X-Large"};
  int pSize = sizeof(product) / sizeof(product[0]);
  int sSize = sizeof(sizes) / sizeof(sizes[0]);
  for (int i = 0; i < pSize; i++)
  {
    cout << "Product Name: " << product[i] << "\n";
    cout << "Sizes: ";
    for (int j = 0; j < sSize; j++)
    {
      cout << sizes[j];
      if (j < sSize - 1)
      {
        cout << ", ";
      }
    }
    if (i < pSize - 1)
    {
      cout << "\n====================\n";
    }
  }
  return 0;
}