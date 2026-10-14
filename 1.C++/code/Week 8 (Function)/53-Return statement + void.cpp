/*
  Function
    Return statement
      Return vs no return examples
      Return vs no value in variable
      Main function return test (always int)
      Nothing after return
      Void with return ... ! why ? (works as break)
*/
#include <iostream>
using namespace std;

// void calc(int n1, int n2)
// {
//   cout << n1 + n2 << "\n";
// }
int calc(int n1, int n2)
{
  cout << "operation is done.\n";
  return n1 + n2;
  cout << "This will not show.\n";
}

int main()
{
  // calc(10, 20)
  int result = calc(10, 20);
  cout << result * 5 << "\n";
  cout << result + 20 << "\n";
  return 0;
}